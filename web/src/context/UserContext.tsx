import { ReactNode, createContext, useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'
import { formatPrice } from '../utils/formatPrice'
import { api } from '../services/api'
import { AuthState, SignInCredentials, User } from '../@types/user'

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

  user: User
  signOut(): void
  signIn(credentials: SignInCredentials): Promise<void>

  addCart: (product: Cart) => void
  removeCart: (id: number) => void
  updateAmount: (id: number, type: 'increment' | 'decrement') => void
  priceFormattedAndSubTotal: CartFormatted[]
  totalProducts: number
}

interface IAuthContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as IUserContext)

export const UserStorage = ({ children }: IAuthContextProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TudoCopiadora:token')
    const userString = localStorage.getItem('@TudoCopiadora:user') // Fix the key here

    if (token && userString) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(userString) }
    }
    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', { email, password })
    const { token, user } = response.data

    localStorage.setItem('@TudoCopiadora:token', token)
    localStorage.setItem('@TudoCopiadora:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@TudoCopiadora:token')
    localStorage.removeItem('@TudoCopiadora:user')

    setData({} as AuthState)
  }, [])

  const [cart, setCart] = useState<Cart[]>(() => {
    return []
  })

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
        user: data.user,
        signIn,
        signOut,
        totalProducts,
        priceFormattedAndSubTotal,
        cart,
        addCart,
        removeCart,
        updateAmount,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
