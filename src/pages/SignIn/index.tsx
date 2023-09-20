import { zodResolver } from '@hookform/resolvers/zod'
import { Coins } from 'phosphor-react'
import { useState } from 'react'
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
  const [errorLogin, setErrorLogin] = useState('')

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleOnSubmit: SubmitHandler<FormSchema> = async (data) => {
    const { email, password } = data

    const user = await api.get(`/session`, {
      params: { email, password },
    })

    const userData = user.data[0]
    console.table(userData)

    if (userData) {
      navigate('/')
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

          {<MessageError>{errorLogin}</MessageError>}

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
