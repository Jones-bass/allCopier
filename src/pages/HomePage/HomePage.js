  import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca  from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import Footer from "../Footer/Footer";
import Post from "../Post/Post";
import "../HomePage/HomePage.scss";

const HomePage = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div>
      <div className="header">
        <Link className="logo" to="/" aria-label="Home">
        <img src={LogoMarca} alt="LogoMarca" />
        </Link>
        <nav className="header-menu">
          <NavLink to="/horarios">Horários</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <div className="user">
          {data ? (
            <>
               {data.nome}
              <button onClick={userLogout}><Sair /></button>
            </>
          ) : (
            <Link className="login" to="/login">Login 
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
