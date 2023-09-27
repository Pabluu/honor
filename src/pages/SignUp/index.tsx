import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { Coins } from 'phosphor-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { Field } from '../../components/Fields'
import { Form } from '../../components/Form'
import { Modal } from '../../components/Modal'
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
  const [modal, setModal] = useState('')

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleOnSubmit: SubmitHandler<FormSchema> = async (data) => {
    const { name, identifier, email, password } = data

    try {
      const response = await api.post('/signup', {
        identifier,
        name,
        email,
        password,
      })

      localStorage.setItem('user', JSON.stringify(response.data))
      setModal('Conta criada com sucesso')

      setTimeout(() => {
        navigate('/')
      }, 3000) // mesmo tempo do :after do modal
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error

        console.log(response?.data)
        if (response?.data.field) {
          setError(
            response?.data.field,
            {
              type: 'string',
              message: response?.data.message,
            },
            { shouldFocus: true },
          )
        }
      }
    }
  }

  return (
    <Container>
      {modal && createPortal(<Modal text={modal} />, document.body)}
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

          <ButtonPrimary
            text="Cadastrar"
            type="submit"
            disabled={isSubmitting}
          />
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
