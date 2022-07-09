import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import { FaWhatsapp, FaMailBulk, FaHourglassHalf, FaAngellist } from 'react-icons/fa';


import styles from './styles.module.css';

const Contacts = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div>
      <div className={styles.pageHeader}>
        <Link className={styles.logoHeader} to="/home" aria-label="Home">
          <img src={LogoMarca} alt="LogoMarca" />
        </Link>
        <nav className={styles.headerMenu}>
          <div className={styles.loginUser}>
            {data ? (
              <>
                {data.nome}
                <button onClick={userLogout}><Sair /></button>
              </>
            ) : (
              <Link className={styles.login} to="/login">Login
              </Link>
            )}
          </div>
        </nav>
      </div>

      <div className={styles.containerContatcs}>
        <h1> <FaHourglassHalf style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
        /> Horarios de Funcionamento</h1>
        <p>Segunda à Sexta <br /> dás 08:00 à 12:00 e dás 14:00 à 17:20.</p>
        <p>Sábado <br /> dás 08:00 à 12:00</p>
      </div>
      <div className={styles.containerContatcs}>
        <h1> <FaAngellist style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
        />Contato de Atenimento</h1>
        <p><FaWhatsapp style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
        />79 9 9959-1921 <br />
          <FaMailBulk style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
          />tudotudo_tb@hotmail.com</p>

        <p><FaWhatsapp style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
        />79 9 9923-242 <br />
          <FaMailBulk style={{ marginBottom: '-0.2rem', marginRight: '0.2rem' }}
          />jonesbass.tb@gmail.com</p></div>
    </div>
  );
};

export default Contacts;
