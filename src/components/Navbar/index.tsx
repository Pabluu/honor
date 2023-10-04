import {
  Buildings,
  ChartLineUp,
  CheckCircle,
  CurrencyCircleDollar,
  House,
  Person,
} from 'phosphor-react'
import { useState } from 'react'
import { LinkTo } from '../utils/LinkTo'
import { Content, Item, NavButton, NavbarContainer } from './styles'

import logo from '../../../logo.svg'

export function NavBar() {
  const [statusNav, setStatusNav] = useState(false)

  function handleClick() {
    setStatusNav(!statusNav)
  }

  return (
    <>
      <NavbarContainer $isactive={statusNav}>
        <NavButton onClick={handleClick} $isactive={statusNav}>
          <img src={logo} alt="" />
        </NavButton>
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
      </NavbarContainer>
    </>
  )
}
