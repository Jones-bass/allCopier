import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import almofada from "../../assets/almofada.jpg";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const CartDetail = () => {
  const { data, userLogout } = useContext(UserContext);
  const  cart  = useSelector((state) => state.cardCart)

  console.log(cart)

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
                <button onClick={userLogout}>
                  <Sair />
                </button>
              </>
            ) : (
              <Link className={styles.login} to="/login">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>

      <div>
        <div className={styles.containerProducts}>
          <h1>Produtos no Carrinho</h1>

          <div className={styles.cardContaneir}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Qtd</th>
                  <th>Preço</th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <button>X</button>
                  </th>
                  <th>
                    <img
                      className={styles.photoCar}
                      src={almofada}
                      alt="almofada"
                    />
                  </th>
                  <th>{cart.value}</th>
                  <th>R$ 100.00</th>
                  <th>
                    <button> + </button>
                  </th>
                  <th>
                    <button> - </button>
                  </th>
                  <th>R$ 200.00</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>{cart.value} itens</th>
                  <th></th>
                  <th></th>
                  <th>R$ 200.00</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className={styles.buttonConfirmation}>Confirmar Pedido</button>
      </div>
    </div>
  );
};

export default CartDetail;
