import { Link } from 'react-router-dom'
import List from '../../assets/carrinho.png'
import { Button } from '../Button/Index'

import styles from './styles.module.css'

export const EmptyCart = () => {
  return (
    <div className={styles.containerIcon}>
      <div className={styles.iconImage}>
        <img src={List} alt="" />
      </div>
      <p>
        Ops! seu carrinho está vazio 😔 <br />
      </p>
      <Button>
        <Link to="/home">ir para loja</Link>
      </Button>
    </div>
  )
}
