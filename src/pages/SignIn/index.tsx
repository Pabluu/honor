import { Coins } from 'phosphor-react'
import { FormSignIn } from '../../components/FormSignIn'
import { LinkTo } from '../../components/LinkTo'
import { SignContainer } from '../../components/Sign/styles'
import { DescriptionSignIn, InContainer } from './styles'

export function SignIn() {
  return (
    <SignContainer>
      <InContainer>
        {/* <Title>Cadastro</Title> */}
        <FormSignIn />
      </InContainer>

      <DescriptionSignIn>
        <Coins size={64} />

        <h1>Honor Money</h1>

        <p>Não possui uma conta ?</p>

        <LinkTo to="/signup">Criar Conta</LinkTo>
      </DescriptionSignIn>
    </SignContainer>
  )
}
