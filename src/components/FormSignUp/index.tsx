import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormContainer, MessageError } from './styles'

const formSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(3, 'O nome deve possuir no minimo 3 letras'),

  identifier: z
    .string()
    .nonempty('O identificador é obrigatório')
    .min(11, 'O CNPJ/CPF deve possuir no minimo 11 digitos')
    .max(18, 'O CNPJ/CPF deve possuir no máximo 18 digitos'),

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

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleOnSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>

        <input
          type="text"
          placeholder="Digite o nome empresarial"
          id="name"
          {...register('name')}
        />

        {<MessageError>{errors.name?.message}</MessageError>}
      </div>

      <div>
        <label htmlFor="identifier">CNPJ ou CPF</label>
        <input
          type="text"
          placeholder="Digite o CNPJ ou CPF"
          id="identifier"
          {...register('identifier')}
        />
        {<MessageError>{errors.identifier?.message}</MessageError>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Digite o e-mail"
          id="email"
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
          {...register('password')}
        />
        {<MessageError>{errors.password?.message}</MessageError>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Cadastrar
      </button>
    </FormContainer>
  )
}
