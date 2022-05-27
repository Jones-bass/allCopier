
import { FaProductHunt } from "react-icons/fa";
import styles from './styles.module.css';

const Post = ({ title, text, image }) => {
  return (
    <div>
      <div className={styles.containerConteudo}>
        <div className={styles.containerText}>
          <span className={styles.detalhe}></span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
          <button className={styles.button}><FaProductHunt />PERSONALIZE!</button>
        </div>
        <img className={styles.imgPersonalizados} src={image} alt="Personalizados" />
      </div>
    </div>
  )
}

export default Post;