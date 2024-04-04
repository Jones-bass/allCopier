import { FaChalkboard, FaUserCircle } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import logoImg from '../../assets/tudo.png'
import objectImg from '../../assets/object.png'

import linesImg from '../../assets/tracos.png'
import waveImg from '../../assets/onda.png'

import { Button } from '../Button/Index'
import styles from './styles.module.css'

export function HomeScreen() {
  return (
    <div className={styles.pageHome}>
      <div className={styles.content}>
        <img className={styles.AppLogo} src={logoImg} alt="LogoInicial" />
        <div>
          <div className={styles.buttonContainer}>
            <img className={styles.linesImg} src={linesImg} alt="Linhas" />
            <img className={styles.objectImg} src={objectImg} alt="Linhas" />
            <img className={styles.waveImg} src={waveImg} alt="Linhas" />

            <Link to="/home">
              <Button>
                <FaChalkboard
                  aria-label="Visitar"
                  style={{ marginBottom: '-0.2rem', marginRight: '1rem' }}
                />
                Visitar
              </Button>
            </Link>
            <Link to="/login">
              <Button>
                <FaUserCircle
                  aria-label="Logar"
                  style={{ marginBottom: '-0.2rem', marginRight: '1rem' }}
                />
                Logar
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.back} />
    </div>
  )
}
