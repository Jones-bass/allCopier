import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../store/actions/cart";
import { useKeenSlider } from "keen-slider/react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

import "keen-slider/keen-slider.min.css";

import { FaChild, FaLayerGroup } from "react-icons/fa";
import {BiSelectMultiple} from "react-icons/bi"
import { MdOutlineAddShoppingCart } from "react-icons/md"

import styles from "./styles.module.css";

const textIcons = [
  "Xerox - Impressões",
  "Plastificação",
  "Encadernação ",
  "Consultas de Veículos",
  "Consultas CPF",
  "Fardamentos",
  "Sublimação em Geral ",
  "Personalizados em Geral",
];

const LandPage = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.carrinho.value);
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
        {products.map((item, index) => (
          <div key={index}>
            <div className={styles.containerConteudo}>
              <div className={styles.containerText}>
                <span className={styles.detalhe}></span>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.text}>{item.text}</p>
                <h2>R$ {item.price.toFixed(2)}</h2>
                <button onClick={() => dispatch(cartActions.Add(cart))}>
                  <MdOutlineAddShoppingCart size={16}/>
                  Compre Agora
                </button>
              </div>

              <div ref={sliderRef} className="keen-slider">
                <li className="keen-slider__slide">
                  <img className={styles.imgPersonalizados}
                    src={item.image[0]}
                    alt={item.title}
                  />
                </li>
                <li className="keen-slider__slide">
                  <img className={styles.imgPersonalizados}
                    src={item.image[1]}
                    alt={item.title}
                  />
                </li>
              </div>
            </div>
          </div>
        ))}
      

      <div className={styles.containerPost}>
        <h1>
          <FaChild style={{ marginBottom: "-0.5rem" }} /> SOBRE NÓS
        </h1>
        <section className={styles.sobre}>
          <div className={styles.sobreInfo}>
            <h1>
              <FaLayerGroup style={{ marginBottom: "-0.4rem" }} /> TudoTudo
              Copiadora
            </h1>
            <p>
              Somos uma empresa especializadas em serviços gráficos há mais de
              08 anos aqui no Centro-Sul de Sergipe, somos líder em atendimento,
              trabalhamos com responsabilidade, credibilidade e satisfação
              levando com todo carinho aos nossos clientes e amigos.
            </p>
            <h2>Trabalhamos</h2>
            {textIcons.map((item, index) => (
              <li key={index} className={styles.iconsService}>
                <BiSelectMultiple  marginBottom='20px' color='#01FF5F'/>
                {' '}{item}
              </li>
            ))}
          </div>

          <div className={styles.sobreImg}>
            <img
              className={styles.imgPersonalizados}
              src={img1}
              alt="Personalizados"
            />
          </div>
          <div className={styles.sobreImg}>
            <img
              className={styles.imgPersonalizados}
              src={img2}
              alt="Personalizados"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandPage;
