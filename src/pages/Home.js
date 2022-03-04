import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tudo.png';
import '../styles/Home.css';

export function Home() {
  
  return (
    <div className="page-home">
      <img className="logoHome" src={logoImg} alt="LogoInicial" />
      <div className='buttonHome'>
      <h1>Serviços Graficos</h1>
      <Link to="/visita">
          <h1>Visitar o Site</h1>
        </Link>
      </div>
    </div>

  )
}