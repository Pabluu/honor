import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormContainer } from './styles'

const formSchema = z.object({
  name: z.string().min(3),
  identifier: z.string().min(11),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().min(11),
})

type FormSchema = z.infer<typeof formSchema>

export function FormUser() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  function handleUserSubmit(data: FormSchema) {
    setTimeout(() => {
      console.log(data)
    }, 2000)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleUserSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>

        <input
          type="text"
          placeholder="Digite o nome empresarial"
          id="name"
          {...register('name')}
        />
      </div>

      <div>
        <label htmlFor="identifier">CNPJ ou CPF</label>
        <input
          type="text"
          placeholder="Digite o CNPJ ou CPF"
          id="identifier"
          {...register('identifier')}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Digite o e-mail"
          id="email"
          {...register('email')}
        />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite a senha"
          id="password"
          {...register('password')}
        />
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          placeholder="Digite o telefone"
          id="phone"
          {...register('phone')}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        Enviar
      </button>
    </FormContainer>
  )
}
