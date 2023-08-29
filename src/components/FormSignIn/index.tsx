import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { api } from '../../lib/axios'
import { FormContainer, MessageError } from './styles'

const formSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Tipo de e-mail inválido'),

  password: z.string().nonempty('A senha é obrigatória'),
})

type FormSchema = z.infer<typeof formSchema>

export function FormSignIn() {
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

    const user = await api.get(`/users`, {
      params: { email, password },
    })

    const userData = user.data[0]

    if (userData) {
      navigate('/')
    } else {
      setErrorLogin('Usuário não cadastrado')
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Digite o e-mail"
          id="email"
          autoComplete="username"
          {...register('email')}
        />
        {<MessageError>{errors.email?.message}</MessageError>}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite a senha"
          id="password"
          autoComplete="current-password"
          {...register('password')}
        />
        {<MessageError>{errors.password?.message}</MessageError>}
      </div>

      {<MessageError>{errorLogin}</MessageError>}

      <button type="submit" disabled={isSubmitting}>
        Entrar
      </button>
    </FormContainer>
  )
}
