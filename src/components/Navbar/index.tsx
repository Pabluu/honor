import {
  ArrowRight,
  Buildings,
  ChartLineUp,
  CheckCircle,
  CurrencyCircleDollar,
  House,
  Person,
} from 'phosphor-react'
import { useState } from 'react'
import { LinkTo } from '../utils/LinkTo'
import { Content, Item, Logo, NavButton, NavbarContainer } from './styles'

export function NavBar() {
  const [statusNav, setStatusNav] = useState(false)

  function handleClick() {
    setStatusNav(!statusNav)
  }

  return (
    <>
      <NavbarContainer $isactive={statusNav}>
        <Logo>LOGO AQUI</Logo>
        <Content>
          <Item>
            <LinkTo to="/">
              <House size={24} />
              <p>Página Inicial</p>
            </LinkTo>
          </Item>
          <Item>
            <LinkTo to="/cliente">
              <Person size={24} />
              <p>Cliente</p>
            </LinkTo>
          </Item>
          <Item>
            <LinkTo to="/empresa">
              <Buildings size={24} />
              <p>Empresa</p>
            </LinkTo>
          </Item>
          <Item>
            <LinkTo to="/recibo">
              <CurrencyCircleDollar size={24} />
              <p>Honorário</p>
            </LinkTo>
          </Item>
          <Item>
            <LinkTo to="/pagamento">
              <CheckCircle size={24} />
              <p>Confirmar Pagamento</p>
            </LinkTo>
          </Item>
          <Item>
            <LinkTo to="/relatorio">
              <ChartLineUp size={24} />
              <p>Relatório</p>
            </LinkTo>
          </Item>
        </Content>
        <NavButton onClick={handleClick} $isactive={statusNav}>
          <ArrowRight size={24} color="#1d4ed8" />
        </NavButton>
      </NavbarContainer>
    </>
  )
}
