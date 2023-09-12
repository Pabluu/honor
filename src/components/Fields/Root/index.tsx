import { ReactNode } from 'react'
import { Container } from './styles'

interface FildRootProps {
  children: ReactNode
}

export function FildRoot({ children }: FildRootProps) {
  return <Container>{children}</Container>
}
