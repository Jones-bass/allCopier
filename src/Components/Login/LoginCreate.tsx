import { FormEvent, useContext } from 'react'

import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { UserContext } from '../../context/UserContext'

import { USER_POST } from '../../services/apiUrl'

import { Input } from '../Input/Index'
import { Button } from '../Button/Index'

import styles from './styles.module.css'

interface UserPostData {
  username: string
  email: string
  password: string
}

export const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { url, options } = USER_POST<UserPostData>({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className={styles.container}>
      <div className={styles.animeLeft}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  )
}
