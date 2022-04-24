import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import Footer from "../Footer/Footer";
import styles from './styles.module.scss';
import LandPage from "../LandPage/LandPage";

const HomePage = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div>
      <div className={styles.header}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <img src={LogoMarca} alt="LogoMarca" />
        </Link>
        <nav className={styles.headerMenu}>
          <NavLink to="/horarios">Horários</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <div className={styles.user}>
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
      <LandPage />
      <Footer />
    </div>

  );
};

export default HomePage;
