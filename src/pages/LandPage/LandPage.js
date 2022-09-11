import React, { useEffect, useState } from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

import { FaChevronDown, FaChild, FaLayerGroup, FaProductHunt } from "react-icons/fa";

import styles from "./styles.module.css";

const icons = [
  {
    text: "Xerox - Impressões",
  },
  {
    text: "Plastificação",
  },
  {
    text: "Encadernação ",
  },
  {
    text: "Consultas de Veículos",
  },
  {
    text: "Consultas CPF",
  },
  {
    text: "Fardamentos",
  },
  {
    text: "Sublimação em Geral ",
  },
  {
    text: "Personalizados em Geral",
  },
];

const LandPage = () => {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetch("http://localhost:3333/posts");
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <div className={styles.containerConteudo}>
              <div className={styles.containerText}>
                <span className={styles.detalhe}></span>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.text}>{post.text}</p>
                <button>
                  <FaProductHunt 
                  />
                  PERSONALIZE!
                </button>
              </div>
              <img
                className={styles.imgPersonalizados}
                src={post.image}
                alt="Personalizados"
              />
            </div>
          </div>
        ))}
      </div>

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
            {icons.map((icon, index) => (
              <li key={index}>
                <FaChevronDown className={styles.fa} />
                {icon.text}
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
