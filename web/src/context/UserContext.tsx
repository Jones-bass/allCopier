import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../services/apiUrl'
import { formatPrice } from '../utils/formatPrice'

export interface Cart extends Product {
  amount: number
}

interface CartFormatted extends Cart {
  priceFormatted: string
  subTotal: string
}

export interface UpdateAmountProps {
  id: number
  type: 'increment' | 'decrement'
}

interface IUserContext {
  cart: Cart[]
  addCart: (product: Cart) => void
  removeCart: (id: number) => void
  updateAmount: (id: number, type: 'increment' | 'decrement') => void
  userLogin: (username: string, password: string) => Promise<void>
  userLogout: () => Promise<void>
  priceFormattedAndSubTotal: CartFormatted[]
  totalProducts: number

  data: any
  login: boolean | null
  loading: boolean
  error: string | null
}

interface IAuthContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as IUserContext)

export const UserStorage = ({ children }: IAuthContextProviderProps) => {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storageCard = localStorage.getItem('@TudoCopiadora')

    if (storageCard) {
      return JSON.parse(storageCard)
    }
    return []
  })

  const [data, setData] = useState<any>(null)
  const [login, setLogin] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setData(null)
      setError(null)
      setLoading(false)
      setLogin(false)
      window.localStorage.removeItem('token')
      navigate('/')
    },
    [navigate],
  )

  async function getUser(token: string) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error('Usuario ou senha invalido')
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/home')
    } catch (err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(null)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('token invalido')
          await getUser(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  const priceFormattedAndSubTotal = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  const totalProducts = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  function addCart(product: Cart) {
    const copyCart = [...cart]

    const productIndex = copyCart.findIndex(
      (cartItem) => cartItem.id === product.id,
    )

    if (productIndex < 0) {
      copyCart.push(product)
      toast.success('Item adicinado no carrinho.')
    } else {
      copyCart[productIndex].amount += product.amount
    }

    setCart(copyCart)
    localStorage.setItem('@TudoCopiadora:cart', JSON.stringify(copyCart))
  }

  function removeCart(id: number) {
    const copyCart = [...cart]
    const productIndex = copyCart.findIndex((cartItem) => cartItem.id === id)

    if (productIndex >= 0) {
      copyCart.splice(productIndex, 1)
      setCart(copyCart)
      localStorage.setItem('@TudoCopiadora:cart', JSON.stringify(copyCart))
    } else {
      throw Error()
    }
  }

  function updateAmount(id: number, type: 'increment' | 'decrement') {
    const copyCart = [...cart]
    const productIndex = copyCart.findIndex((product) => product.id === id)

    if (productIndex >= 0) {
      const item = copyCart[productIndex]
      copyCart[productIndex].amount =
        type === 'increment' ? item.amount + 1 : item.amount - 1
    } else {
      throw Error()
    }

    setCart(copyCart)
    localStorage.setItem('@TudoCopiadora:cart', JSON.stringify(copyCart))
  }

  return (
    <UserContext.Provider
      value={{
        totalProducts,
        priceFormattedAndSubTotal,
        userLogin,
        cart,
        addCart,
        removeCart,
        updateAmount,
        userLogout,
        data,
        login,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
