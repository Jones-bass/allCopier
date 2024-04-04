import { BeatLoader } from 'react-spinners'
import styles from './styles.module.css'

export const LoadingComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <BeatLoader color="#fc00ff" />
    </div>
  )
}
