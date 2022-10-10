import React from "react";
import CardProducts from "../../Components/CardProducts/CardProducts";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

import { FaChild, FaLayerGroup } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi"

import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

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
  const products = useSelector(state => state.productsList)
  
  return (
    <div>
      {products.map(item => {
        return (
          <CardProducts 
            key={item.id_product}
            id={item.id_product}
            product={item}
          />
        )
      })}

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
                <BiSelectMultiple color='tomato' />
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
