import { useForm, FormProvider } from 'react-hook-form'

import { Button } from '../Button/Index'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './styles.module.css'
import { z } from 'zod'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Input } from '../Input/Index'

const createUserSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'O nome é obrigatório',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
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

export const LoginCreate = () => {
  const [loading, setLoading] = useState(false)

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
        await api.post('users', data)

        navigate('/')
        toast.success('Usuário cadastrado com Sucesso.')
      } catch {
        toast.error('Ocorreu um erro ao se cadastrar, tente novamente!')
        setLoading(false)
      }
    },

    [navigate],
  )

  return (
    <section className={styles.container}>
      <div className={styles.animeLeft}>
        <h1>Cadastre-se</h1>

        <FormProvider {...createUserForm}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Input
              name="name"
              label="Nome"
              errorMessage={errors?.name?.message ?? ''}
              required
            />
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
              {loading ? 'Carregando...' : 'Cadastrar'}
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}
