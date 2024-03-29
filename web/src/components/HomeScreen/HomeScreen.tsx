import { FaChalkboard, FaUserCircle } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import logoImg from '../../assets/tudo.png'
import { Button } from '../Button/Index'
import styles from './styles.module.css'

export function HomeScreen() {
  return (
    <div className={styles.pageHome}>
      <img className={styles.AppLogo} src={logoImg} alt="LogoInicial" />
      <div className={styles.introduction}>
        <h1>Serviços Graficos</h1>
      </div>

      <div>
        <div className={styles.buttonContainer}>
          <Button>
            <Link to="/home">
              <FaChalkboard
                style={{ marginBottom: '-0.2rem', marginRight: '1rem' }}
              />
              Visitar
            </Link>
          </Button>
          <Button>
            <Link to="/login">
              <FaUserCircle
                style={{ marginBottom: '-0.2rem', marginRight: '1rem' }}
              />
              Logar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
