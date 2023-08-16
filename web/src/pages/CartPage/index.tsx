import { useContext } from 'react'

import { UserContext } from '../../context/UserContext'
import { EmptyCart } from '../../components/EmptyCart'
import { DetailsCard } from '../../components/CardDetails'
import { formatPrice } from '../../utils/formatPrice'

import styles from './styles.module.css'

export const CartPage = () => {
  const { cart, priceFormattedAndSubTotal, totalProducts } =
    useContext(UserContext)

  const itemExists = cart.length

  if (!itemExists) {
    return <EmptyCart />
  }

  return (
    <div>
      <div className={styles.animeLeft}>
        <div className={styles.containerProducts}>
          <h1>Produtos no Carrinho</h1>

          <div className={styles.cardContaneir}>
            {priceFormattedAndSubTotal.map((item) => {
              return <DetailsCard key={item.id} item={item} />
            })}

            <h3>{formatPrice(totalProducts)}</h3>
          </div>
        </div>
        <button className={styles.buttonConfirmation}>Confirmar Pedido</button>
      </div>
    </div>
  )
}
