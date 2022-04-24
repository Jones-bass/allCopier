
import { FaProductHunt } from "react-icons/fa";


import styles from './styles.module.scss';

const Post = ({ title, text, image}) => {
  return (
      <div>
        <div className={styles.conteudo}>
          <div className={styles.intro}>
            <span className={styles.detail}></span>
            <h1>{title}</h1>
            <p>{text}</p>
           
            <a href="botão"><FaProductHunt />    PERSONALIZE!</a>
       
          </div>
          <img className={styles.imgPersonalizados} src={image} alt="Personalizados" />
        </div>
      </div>
  )
}

export default Post;