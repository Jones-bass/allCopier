import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import Footer from "../Footer/Footer";
import Post from "../Post/Post";
import styles from './styles.module.scss';

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
      <Post />
      <Footer />
    </div>

  );
};

export default HomePage;
