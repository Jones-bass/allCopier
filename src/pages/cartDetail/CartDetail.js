import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "../../store/actions/cart";

import { UserContext } from "../../UserContext";
import LogoMarca from "../../assets/tudoo.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";

import styles from "./styles.module.css";

const CartDetail = () => {
  const { data, userLogout } = useContext(UserContext);
  const cart = useSelector((state) => state.cardCart);
  const dispatch = useDispatch();

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

      <div className={styles.animeLeft}>
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
                {cart.Cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th>
                        <button
                          onClick={() =>
                            dispatch(cartActions.DeleteItem(cart, item))
                          }
                          className={styles.buttonCar}
                        >
                          X
                        </button>
                      </th>
                      <th>
                        <img
                          className={styles.photoCar}
                          src={item.image[0]}
                          alt="almofada"
                        />
                      </th>
                      <th>{item.quantity}</th>
                      <th>R$ {item.price.toFixed(2)}</th>
                      <th>
                        <button
                          onClick={() =>
                            dispatch(cartActions.AddItem(cart, item))
                          }
                          className={styles.buttonCar}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={() =>
                            dispatch(cartActions.RemoveItem(cart, item))
                          }
                          className={styles.buttonCar}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </th>
                      <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                    </tr>
                  );
                })}

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
