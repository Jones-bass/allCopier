import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoMarca } from "../assets/tudoo.svg";

import "../styles/HomePage.css";
import Footer from "./Footer";
import Post from "./Post";
import { UserContext } from "../UserContext";

const HomePage = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div>
      <div className="header">
        <Link className="logo" to="/" aria-label="Home">
          <LogoMarca />
        </Link>

        <nav>
          <ul className="header-menu">
            <li>
              <a href="#formacao">Horários</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
        {data ? (
          <>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </>
        ) : (
          <Link className="login" to="/login">
            Login
          </Link>
        )}
      </div>
      <Post />
      <Footer />
    </div>
  );
};

export default HomePage;
