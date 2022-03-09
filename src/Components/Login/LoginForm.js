import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from "../../UserContext";
import { ReactComponent as LogoMarca } from "../../assets/tudoo.svg";
import "../../styles/Header.css";


const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, userLogout, data } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <header className="header">
        <Link className="logo" to="/" aria-label="Home">
          <LogoMarca />
        </Link>
        <Link to="/"></Link>
        {data ? (
          <Link className="login" to="/visitante">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/criar">
            Criar
          </Link>
        )}
      </header>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
     
    </section>
  );
};

export default LoginForm;