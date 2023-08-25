import { FormUser } from '../../components/FormUser'
import { SignContainer } from '../../components/Sign/styles'
import { Title, UpContainer } from './styles'

export function SignUp() {
  return (
    <SignContainer>
      <UpContainer>
        <Title>Cadastro</Title>
        <FormUser />
      </UpContainer>
    </SignContainer>
  )
}
