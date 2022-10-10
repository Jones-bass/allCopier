import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useSelector } from "react-redux";

import Footer from "../../Components/Footer/Footer";
import LandPage from "../LandPage/LandPage";

import { FaCartArrowDown } from "react-icons/fa";
import LogoMarca from "../../assets/tudoo.svg";

import { ReactComponent as Sair } from "../../assets/sair.svg";

import styles from './styles.module.css';

export function Home() {
  const { data, userLogout } = useContext(UserContext);

  const cart = useSelector(state => state.cardCart)
  console.log(cart)

  return (
    <div>
      <div className={styles.pageHeader}>
        <Link className={styles.logoHeader} to="/" aria-label="Home">
          <img src={LogoMarca} alt="LogoMarca" />
        </Link>
        <nav className={styles.headerMenu}>
          
        <Link to="/cartdetail" aria-label="cartdetail">{cart.value}<FaCartArrowDown size={24}/></Link>

        <Link to="/contacts">Contatos</Link>
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
      <LandPage />
      <Footer />
    </div>
  );
};


