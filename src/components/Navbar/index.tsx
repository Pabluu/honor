import {
  ArrowLeft,
  Buildings,
  ChartLineUp,
  CheckCircle,
  CurrencyCircleDollar,
  House,
  Person,
} from 'phosphor-react'
import { useState } from 'react'
import { Content, Item, Logo, NavButton, NavbarContainer } from './styles'

export function NavBar() {
  const [statusNav, setStatusNav] = useState(true)

  function handleClick() {
    setStatusNav(!statusNav)
  }

  return (
    <>
      <NavbarContainer isDisabled={statusNav}>
        <Logo>LOGO AQUI</Logo>
        <Content>
          <Item>
            <a href="/">
              <House size={24} />
              <p>Página Inicial</p>
            </a>
          </Item>
          <Item>
            <a href="/cliente">
              <Person size={24} />
              <p>Cliente</p>
            </a>
          </Item>
          <Item>
            <a href="/empresa">
              <Buildings size={24} />
              <p>Empresa</p>
            </a>
          </Item>
          <Item>
            <a href="/recibo">
              <CurrencyCircleDollar size={24} />
              <p>Honorário</p>
            </a>
          </Item>
          <Item>
            <a href="/pagamento">
              <CheckCircle size={24} />
              <p>Confirmar Pagamento</p>
            </a>
          </Item>
          <Item>
            <a href="/relatorio">
              <ChartLineUp size={24} />
              <p>Relatório</p>
            </a>
          </Item>
        </Content>
        <NavButton onClick={handleClick} buttonActive={statusNav}>
          <ArrowLeft size={24} color="#1d4ed8" />
        </NavButton>
      </NavbarContainer>
    </>
  )
}
