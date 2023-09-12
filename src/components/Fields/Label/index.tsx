import { Container } from './styles'

interface LabelProps {
  text: string
  htmlFor: string
  transform?: true
}

export function FieldLabel({ text, htmlFor, transform }: LabelProps) {
  return (
    <Container htmlFor={htmlFor} transform={transform}>
      {text}
    </Container>
  )
}
