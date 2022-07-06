import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import Modal from 'react-modal'


import Footer from "../Footer/Footer";
import LandPage from "../LandPage/LandPage";
import styles from './styles.module.css';
import Horario from "../../Components/Modal/Horario";

Modal.setAppElement('#root')

const HomePage = () => {
  const [modalIsOpen, SetModalIsOpen] = useState(false)
  const { data, userLogout } = useContext(UserContext);


  function handleOpenModal() {
    SetModalIsOpen(true)
  }

  function handleCloseModal() {
    SetModalIsOpen(false)
  }

  return (
    <div>
      <div className={styles.pageHeader}>
        <Link className={styles.logoHeader} to="/" aria-label="Home">
          <img src={LogoMarca} alt="LogoMarca" />
        </Link>
        <nav className={styles.headerMenu}>
          
          <a href="#alt" onClick={handleOpenModal}> Horários</a>
          <a href="#alt" onClick={handleOpenModal}> Contato</a>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}>
        <Horario/>   
      </Modal>
      <LandPage />
      <Footer />
    </div>
  );
};

export default HomePage;
