import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from "../../UserContext";
import logoMarca from "../../assets/tudoo.svg"
import styles from './styles.module.css';


const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.animeLeft}>
      <Link className={styles.logoHeader} to="/home" aria-label="Home">
          <img src={logoMarca} alt="LogoMarca" />
        </Link>

      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div>
        <br />
        <p style={{color: 'black'}}>Ainda não possui conta?</p>
        <Link to="/login/criar" className={styles.subtitle}>Cadastre-se
        </Link>
      </div>
      </div>
    </section>
  );
};

export default LoginForm;