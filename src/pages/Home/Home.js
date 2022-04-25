import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/tudo.png';
import styles from './styles.module.scss';

export function Home() {

  return (
    <div className={styles.pageHome}>
      <img className={styles.AppLogo} src={logoImg} alt="LogoInicial" />
      <div className={styles.h1Bottom}>
      <h1>Serviços Graficos</h1>
      </div>
      
      <div>
        <div className={styles.buttonContainer}>
          <button >
            <Link style={{ color: "white", fontSize: '22px', fontWeight: 'bold' }} to="/home">Visitar o Site</Link>
          </button>
          <button >
            <Link style={{ color: "white", fontSize: '22px', fontWeight: 'bold' }} to="/login">Comprar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}