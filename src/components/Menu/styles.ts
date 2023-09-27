import styled from 'styled-components'

export const MenuBar = styled.nav`
  display: flex;
  justify-content: flex-end;

  width: 100vw;
  height: 3.5rem;

  padding: 0.4rem 0.6rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background-color: ${(props) => props.theme['gray-800']};

  & svg {
    cursor: pointer;
  }
`

export const MenuItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;

  width: 100%;

  li::marker {
    content: '';
  }
`
