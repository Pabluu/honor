import { ReactNode } from 'react'
import { Container } from './styles'

interface FieldContainerInputProps {
  children: ReactNode
}

export function FieldContainerInput({ children }: FieldContainerInputProps) {
  return <Container>{children}</Container>
}
