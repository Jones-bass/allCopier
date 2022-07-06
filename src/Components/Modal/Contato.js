import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import styles from '../../pages/HomePage/styles.module.css';

const Contato = ()=> {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div>
      <div className={styles.pageHeader}>
        <Link className={styles.logoHeader} to="/" aria-label="Home">
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
    </div>
  );
};

export default Contato;
