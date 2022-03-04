import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoMarca } from '../assets/dogs.svg';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <header className='header'>
    <nav>
      <Link className='logo' to="/" aria-label="Home">
        <LogoMarca />
      </Link>
    </nav>
  </header>
  )
}

export default HomePage;