import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../store/actions/cart";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { MdOutlineAddShoppingCart } from "react-icons/md"

import styles from "./styles.module.css";


const CardProducts = ({product}) => {
  const cart = useSelector(state => state.cardCart.value);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 28,
    },
  });

  const dispatch = useDispatch();

  console.log(cartActions);

  return (
      <div>
          <div>
            <div className={styles.containerConteudo}>
              <div className={styles.containerText}>
                <span className={styles.detalhe}></span>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.text}>{product.text}</p>
                <h2>R$ {product.price.toFixed(2)}</h2>
                
                <button 
                  onClick={() => dispatch(cartActions.Add(cart))}>
                  <MdOutlineAddShoppingCart size={16}/>
                  Compre Agora
                </button>
              </div>

              <div ref={sliderRef} className="keen-slider">
                <li className="keen-slider__slide">
                  <img className={styles.imgPersonalizados}
                    src={product.image[0]}
                    alt={product.title}
                  />
                </li>
                <li className="keen-slider__slide">
                  <img className={styles.imgPersonalizados}
                    src={product.image[1]}
                    alt={product.title}
                  />
                </li>
              </div>
            </div>
          </div>
    </div>
  );
};

export default CardProducts;
