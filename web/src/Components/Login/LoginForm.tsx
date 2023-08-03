import { useContext } from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../Hooks/useForm'

import { UserContext } from '../../context/UserContext'
import { Input } from '../Input/Index'
import { Button } from '../Button/Index'

import styles from './styles.module.css'

export const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.animeLeft}>
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
          <p style={{ color: 'black' }}>Ainda não possui conta?</p>
          <Link to="/login/criar" className={styles.subtitle}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </section>
  )
}
