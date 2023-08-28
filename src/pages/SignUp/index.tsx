import { Coins } from 'phosphor-react'
import { FormSignUp } from '../../components/FormSignUp'
import { SignContainer } from '../../components/Sign/styles'
import { DescriptionSignUp, UpContainer } from './styles'

export function SignUp() {
  return (
    <SignContainer>
      <UpContainer>
        {/* <Title>Cadastro</Title> */}
        <FormSignUp />
      </UpContainer>

      <DescriptionSignUp>
        <Coins size={64} />

        <h1>Honor Money</h1>

        <p>Já possui uma conta ?</p>

        <button>Login</button>
      </DescriptionSignUp>
    </SignContainer>
  )
}
