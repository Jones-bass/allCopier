import imgCamisa from '../../assets/camisa.png';
import imgCaneca from '../../assets/copo.jpg';
import imgAlmofadas from '../../assets/almofadas.png';
import imgAzulejo from '../../assets/azulejo.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

import { FaChevronDown, FaChild, FaLayerGroup } from "react-icons/fa";
import Post from './Post';
import styles from './styles.module.css';

const LandPage = () => {
  return (

    <div>
      <div>
        <Post
          title='Caneca Personalizada'
          text='Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.'
          image={imgCaneca}
        />
        <Post
          title='Camiseta Personalizada'
          text='Crie sua CAMISA AGORA! Solte a sua imaginação. deixe que a gente faz o resto.'
          image={imgCamisa}
        />
        <Post
          title='Almofada Personalizada'
          text='Crie sua ALMOFADA! Solte a sua imaginação. A gente faz o resto.'
          image={imgAlmofadas}
        />
        <Post
          title='Azulejo Personalizada'
          text='Criamos AZULEJO PERSONALIZADOS! Presentei quem você mais ama.'
          image={imgAzulejo}
        />
      </div>

      <div className={styles.containerPost}>
        <h1><FaChild style={{ marginBottom: '-0.5rem'}}/> SOBRE NÓS</h1>
        <section className={styles.sobre}>
          <div className={styles.sobreInfo}>
            <h1><FaLayerGroup style={{ marginBottom: '-0.4rem'}}/> TudoTudo Copiadora</h1>
            <p>Somos uma empresa especializadas em serviços gráficos há mais de 08 anos aqui no Centro-Sul
              de Sergipe, somos líder em atendimento, trabalhamos com responsabilidade, credibilidade e satisfação
              levando com todo carinho aos nossos clientes e amigos.</p>
            <h2>Trabalhamos</h2>
              <li><FaChevronDown className={styles.fa}/> Xerox - Impressões</li>
              <li><FaChevronDown className={styles.fa}/> Plastificação</li>
              <li><FaChevronDown className={styles.fa}/> Encadernação</li>
              <li><FaChevronDown className={styles.fa}/> Consultas de Veículos</li>
              <li><FaChevronDown className={styles.fa}/> Consultas CPF</li>
              <li><FaChevronDown className={styles.fa}/> Fardamentos</li>
              <li><FaChevronDown className={styles.fa}/> Sublimação em Geral</li>
              <li><FaChevronDown className={styles.fa}/> Personalizados em Geral</li>
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