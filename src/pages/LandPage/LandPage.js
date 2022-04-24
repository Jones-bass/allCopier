import imgCamisa from '../../assets/camisa.png';
import imgCaneca from '../../assets/copo.jpg';
import imgAlmofadas from '../../assets/almofadas.png';
import imgAzulejo from '../../assets/azulejo.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

import Post from './Post';
import styles from './styles.module.scss';

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


      <h1>SOBRE NÓS</h1>
        <section className={styles.sobre}>
          <div className={styles.sobreInfo}>
            <h1>TudoTudo Copiadora</h1>
            <p>Somos uma empresa especializadas em serviços gráficos há mais de 08 anos aqui no Centro-Sul
              de Sergipe, somos líder em atendimento, trabalhamos com responsabilidade, credibilidade e satisfação 
              levando com todo carinho aos nossos clientes e amigos.</p>
              <h2>Trabalhamos</h2>
              <li>* Xerox - Impressões</li>
              <li>* Plastificação</li>
              <li>* Encadernação</li>
              <li>* Consultas de Veículos</li>
              <li>* Consultas CPF</li>
              <li>* Fardamentos</li>
              <li>* Sublimação em Geral</li>
              <li>* Personalizados em Geral</li>
            </div>
          <div className={styles.sobreImg}>
            <img className={styles.imgPersonalizados} src={img1} alt="Personalizados" />
          </div>
          <div className={styles.sobreImg}>
            <img className={styles.imgPersonalizados} src={img2} alt="Personalizados" />
          </div>
          <div className={styles.sobreImg}>
            <img className={styles.imgPersonalizados} src={img3} alt="Personalizados" />
          </div>
          
        </section>

      </div>


  )
}

export default LandPage;