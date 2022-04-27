import React from 'react';
import { FaChalkboard, FaUserCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/tudo.png';
import styles from './styles.module.scss';

export function Home() {

  return (
    <div className={styles.pageHome}>
      <img className={styles.AppLogo} src={logoImg} alt="LogoInicial" />
      <div className={styles.intraduction}>
        <h1>Serviços Graficos</h1>
      </div>

      <div>
        <div className={styles.buttonContainer}>
          <button >
            <Link style={{ color: "white", fontSize: '1.5rem'}} to="/home">
              <FaChalkboard  style={{ marginBottom: '-0.2rem', marginRight: '1rem'}}/>
              Visitar</Link>
          </button>
          <button >
            <Link style={{ color: "white", fontSize: '1.5rem'}} to="/login">
              <FaUserCircle style={{ marginBottom: '-0.2rem', marginRight: '1rem'}}/>Logar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}