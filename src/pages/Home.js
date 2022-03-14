import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/tudo.png';
import Button from '../Components/Forms/Button';
import '../styles/Home.css';

export function Home() {

  return (
    <div className="page-home">
      <img className="logoHome" src={logoImg} alt="LogoInicial" />
      <div className='buttonHome'>
        <h1>Serviços Graficos</h1>
        <div className='button'>
        <Button >
          <Link to="/home">Visitar o Site</Link>
        </Button>
        <Button>
          <Link to="/login">Comprar</Link>
        </Button>
        </div>
      </div>
    </div>
  )
}