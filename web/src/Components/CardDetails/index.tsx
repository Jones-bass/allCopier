import { useContext } from 'react'
import { Product } from '../../@types/product'
import { UserContext } from '../../context/UserContext'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'

import styles from './styles.module.css'

export interface ProductFormat extends Product {
  priceFormattd: string
}

interface CardProps {
  item: Product
}

export const DetailsCard = ({ item }: CardProps) => {
  const { updateAmount, removeCart } = useContext(UserContext)

  function handleIncrement(id: number) {
    updateAmount(id, 'increment')
  }

  function handleDecrement(id: number) {
    updateAmount(id, 'decrement')
  }

  function handleRemoveItem(id: number) {
    removeCart(id)
  }

  return (
    <div className={styles.cardContaneirPayment}>
      <img src={item.image[0]} alt="almofada" />
      <div className={styles.cardPayment}>
        <p>{item.title}</p>
        <div className={styles.containerButton}>
          <button
            onClick={() => handleIncrement(item.id)}
            className={styles.buttonCar}
          >
            <BiPlus size={16} />
          </button>

          <input type="number" value={item.amount} readOnly />

          <button
            onClick={() => handleDecrement(item.id)}
            disabled={item.amount <= 1}
            className={styles.buttonCar}
          >
            <BiMinus size={16} />
          </button>
        </div>
      </div>
      <h3>{item.subTotal}</h3>
      <button
        className={styles.buttonRemove}
        onClick={() => handleRemoveItem(item.id)}
      >
        <BiTrash size={16} />
      </button>
    </div>
  )
}
