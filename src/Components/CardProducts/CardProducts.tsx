import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { MdOutlineAddShoppingCart } from 'react-icons/md'

import styles from './styles.module.css'
import { Product } from '../../@types/product'
import { ProductFormat } from '../../pages/Home'
import { Button } from '../Button/Index'

interface ProductsProps {
  item: ProductFormat
}

interface Cart extends Product {
  amount: number
}

export const CardProducts = ({ item }: ProductsProps) => {
  const [amount, setAmount] = useState(1)
  const { cart, addCart } = useContext(UserContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 28,
    },
  })

  function handleAddCart(product: Cart) {
    const newProduct = {
      ...product,
      amount,
    }

    addCart(newProduct)
    setAmount(1)
    console.log(cart)
  }

  return (
    <div>
      <div>
        <div className={styles.containerConteudo}>
          <div className={styles.containerText}>
            <span className={styles.detalhe}></span>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.text}>{item.text}</p>
            <h2>R$ {item.price.toFixed(2)}</h2>

            <Button onClick={() => handleAddCart(item)}>
              <MdOutlineAddShoppingCart size={22} />
              Compre Agora
            </Button>
          </div>

          <div ref={sliderRef} className="keen-slider">
            <li className="keen-slider__slide">
              <img
                className={styles.imgPersonalizados}
                src={item.image[0]}
                alt={item.title}
              />
            </li>
            <li className="keen-slider__slide">
              <img
                className={styles.imgPersonalizados}
                src={item.image[1]}
                alt={item.title}
              />
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}
