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
import {
  Container,
  DescriptionSignUp,
  SignContainer,
} from '../../components/utils/Sign'
import { api } from '../../lib/axios'

const formSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(3, 'O nome deve possuir no mínimo 3 letras'),

  identifier: z
    .string()
    .nonempty('O identificador é obrigatório')
    .min(11, 'Mínimo 11 digitos')
    .max(18, 'Máximo 18 digitos'),

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

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleOnSubmit: SubmitHandler<FormSchema> = async (data) => {
    const { name, identifier, email, password } = data

    try {
      const response = await api.post('/signup', {
        name,
        identifier,
        email,
        password,
      })

      console.table(response)

      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.code)
      }
    }
  }

  return (
    <Container>
      <SignContainer>
        <Form submit={handleSubmit(handleOnSubmit)}>
          {/* NAME */}
          <Field.Root>
            <Field.Label htmlFor="name" text="Nome" />

            <Field.ContainerInput>
              <Field.Input
                placeholder="Digite o nome empresarial"
                id="name"
                autoComplete="username"
                {...register('name')}
              />
            </Field.ContainerInput>
            {<MessageError>{errors.name?.message}</MessageError>}
          </Field.Root>

          {/* IDENTIFIER */}
          <Field.Root>
            <Field.Label htmlFor="identifier" text="CNPJ/CPF" />

            <Field.ContainerInput>
              <Field.Input
                placeholder="Digite o CNPJ/CPF"
                id="identifier"
                autoComplete="username"
                {...register('identifier')}
              />
            </Field.ContainerInput>
            {<MessageError>{errors.identifier?.message}</MessageError>}
          </Field.Root>

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
                autoComplete="new-password"
                {...register('password')}
              />
            </Field.ContainerInput>
            {<MessageError>{errors.password?.message}</MessageError>}
          </Field.Root>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Form>
      </SignContainer>

      <DescriptionSignUp>
        <Coins size={64} />

        <h1>Honor Money</h1>

        <p>Já possui uma conta ?</p>

        <LinkTo to="/signin">Fazer Login</LinkTo>
      </DescriptionSignUp>
    </Container>
  )
}
