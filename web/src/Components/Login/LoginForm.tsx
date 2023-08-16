import { useCallback, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../Button/Index'

import styles from './styles.module.css'
import { useForm, FormProvider } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '../../context/UserContext'
import { toast } from 'react-toastify'
import { Input } from '../Input/Index'

const createUserSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
    .regex(/[A-Z]/, {
      message: 'A senha deve ter pelo menos uma letra maiúscula.',
    })
    .regex(/[a-z]/, {
      message: 'A senha deve ter pelo menos uma letra minúscula.',
    })
    .regex(/[0-9]/, { message: 'A senha deve ter pelo menos um número.' })
    .regex(/[^A-Za-z0-9]/, {
      message: 'A senha deve ter pelo menos um caractere especial.',
    }),
})

type CreateUserData = z.infer<typeof createUserSchema>

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const { signIn } = useContext(UserContext)

  const navigate = useNavigate()

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = createUserForm

  const handleOnSubmit = useCallback(
    async (data: CreateUserData) => {
      try {
        setLoading(true)
        await signIn({ ...data })

        navigate('/home')
        if (data !== undefined) {
          toast.success('Usuário Logado.')
        }
      } catch {
        toast.error('Ocorreu um erro ao fazer login, cheque as credenciais.')
        setLoading(false)
      }
    },

    [signIn, navigate],
  )

  return (
    <section className={styles.container}>
      <div className={styles.animeLeft}>
        <h1>Login</h1>

        <FormProvider {...createUserForm}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Input
              name="email"
              label="E-mail"
              errorMessage={errors?.email?.message ?? ''}
              required
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              errorMessage={errors?.password?.message ?? ''}
              required
            />
            <Button disabled={isSubmitting} type="submit">
              {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </form>
        </FormProvider>

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
