import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { Coins } from 'phosphor-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Field } from '../../components/Fields'
import { Form } from '../../components/Form'
import { LinkTo } from '../../components/utils/LinkTo'
import { MessageError } from '../../components/utils/MessageError'
import { Container, SignContainer } from '../../components/utils/Sign'
import { api } from '../../lib/axios'
import { DescriptionSignIn } from './styles'

const formSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Tipo de e-mail inválido'),

  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha deve possuir 6 digitos'),
})

type FormSchema = z.infer<typeof formSchema>

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleOnSubmit: SubmitHandler<FormSchema> = async (data) => {
    const { email, password } = data

    try {
      const response = await api.post(`/session`, { email, password })

      const user = response.data
      localStorage.setItem('user', JSON.stringify(user))

      setTimeout(() => {
        navigate('/')
      }, 3000) // mesmo tempo do :after do modal
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error

        console.log(response?.data)
        if (response?.data) {
          setError(
            'password',
            {
              type: 'string',
              message: 'Credenciais inválidas',
            },
            { shouldFocus: true },
          )
        }
      }
    }
  }

  return (
    <Container>
      {/* FORM */}
      <SignContainer>
        <Form submit={handleSubmit(handleOnSubmit)}>
          {/* EMAIL */}
          <Field.Root>
            <Field.Label htmlFor="email" text="E-mail" />
            <Field.ContainerInput>
              <Field.Input
                type="email"
                placeholder="Digite o e-mail"
                id="email"
                autoComplete="username"
                {...register('email')}
              />
            </Field.ContainerInput>

            {<MessageError>{errors.email?.message}</MessageError>}
          </Field.Root>

          {/* PASSWORD */}
          <Field.Root>
            <Field.Label htmlFor="password" text="Senha" />
            <Field.ContainerInput>
              <Field.Input
                type="password"
                placeholder="Digite a senha"
                id="password"
                autoComplete="current-password"
                {...register('password')}
              />
            </Field.ContainerInput>
            {<MessageError>{errors.password?.message}</MessageError>}
          </Field.Root>

          <button type="submit" disabled={isSubmitting}>
            Entrar
          </button>
        </Form>
      </SignContainer>

      {/* DESCRIPTION */}
      <DescriptionSignIn>
        <Coins size={64} />

        <h1>Honor Money</h1>

        <p>Não possui uma conta ?</p>

        <LinkTo to="/signup">Criar Conta</LinkTo>
      </DescriptionSignIn>
    </Container>
  )
}
