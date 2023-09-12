import { FormEventHandler, ReactNode } from 'react'
import { FormContainer } from './styles'

interface IForm {
  children: ReactNode
  submit: FormEventHandler
}

export function Form({ children, submit }: IForm) {
  return <FormContainer onSubmit={submit}>{children}</FormContainer>
}
