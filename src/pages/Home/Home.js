import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/tudo.png';
import '../Home/Home.scss';

export function Home() {

  return (
    <div className="pageHome">
      <img className="App-logo" src={logoImg} alt="LogoInicial" />
      <div>
        <h1>Serviços Graficos</h1>
        <div className='buttonContainer'>
          <button className='buttonHome'>
            <Link style={{ color: "white", fontSize: '22px', fontWeight: 'bold' }} to="/home">Visitar o Site</Link>
          </button>
          <button className='buttonHome'>
            <Link style={{ color: "white", fontSize: '22px', fontWeight: 'bold' }} to="/login">Comprar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}