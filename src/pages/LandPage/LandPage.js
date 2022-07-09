import React from 'react';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

import { FaChevronDown, FaChild, FaLayerGroup } from "react-icons/fa";
import Post from './Post';
import styles from './styles.module.css';

const post = [
  {
    title: 'Caneca Personalizada',
    text: 'Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_858781-MLB31777794699_082019-O.jpg'
  },
  {
    title: 'Camiseta Personalizada',
    text: 'Crie sua CAMISA AGORA! Solte a sua imaginação. deixe que a gente faz o resto.',
    image: 'https://img.elo7.com.br/product/zoom/2970630/30-camisetas-personalizada-todos-os-temas-camisa-festa-aniv-sublimacao.jpg'
  },
  {
    title: 'Almofada Personalizada',
    text: 'Crie sua ALMOFADA! Solte a sua imaginação. A gente faz o resto.',
    image: 'https://images.tcdn.com.br/img/img_prod/650501/almofada_personalizada_mickey_tradicional_20x30_f_e_v_101_1_20211227090444.jpg'
  },
  {
    title: 'Azulejo Personalizada',
    text: 'Criamos AZULEJO PERSONALIZADOS! Presentei quem você mais ama.',
    image: 'https://cdn.awsli.com.br/1000x1000/1221/1221152/produto/97497177/f9c9f6a79b.jpg'
  }
]
const LandPage = () => {
  return (

    <div>
      <div>
        {post.map(item => (
          <Post
            title={item.title}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>

      <div className={styles.containerPost}>
        <h1><FaChild style={{ marginBottom: '-0.5rem' }} /> SOBRE NÓS</h1>
        <section className={styles.sobre}>
          <div className={styles.sobreInfo}>
            <h1><FaLayerGroup style={{ marginBottom: '-0.4rem' }} /> TudoTudo Copiadora</h1>
            <p>Somos uma empresa especializadas em serviços gráficos há mais de 08 anos aqui no Centro-Sul
              de Sergipe, somos líder em atendimento, trabalhamos com responsabilidade, credibilidade e satisfação
              levando com todo carinho aos nossos clientes e amigos.</p>
            <h2>Trabalhamos</h2>
            <li><FaChevronDown className={styles.fa} /> Xerox - Impressões</li>
            <li><FaChevronDown className={styles.fa} /> Plastificação</li>
            <li><FaChevronDown className={styles.fa} /> Encadernação</li>
            <li><FaChevronDown className={styles.fa} /> Consultas de Veículos</li>
            <li><FaChevronDown className={styles.fa} /> Consultas CPF</li>
            <li><FaChevronDown className={styles.fa} /> Fardamentos</li>
            <li><FaChevronDown className={styles.fa} /> Sublimação em Geral</li>
            <li><FaChevronDown className={styles.fa} /> Personalizados em Geral</li>
          </div>
          <div className={styles.sobreImg}>
            <img className={styles.imgPersonalizados} src={img1} alt="Personalizados" />
          </div>
          <div className={styles.sobreImg}>
            <img className={styles.imgPersonalizados} src={img2} alt="Personalizados" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandPage;