import styled, { css } from 'styled-components'

interface INavbarContainerProps {
  $isactive: true | false
}

export const NavbarContainer = styled.aside<INavbarContainerProps>`
  position: relative;
  top: 0;
  left: 0;
  width: 17.5rem;
  ${(props) =>
    !props.$isactive &&
    css`
      width: 3.25rem;
    `};
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  background-color: ${(props) => props.theme['gray-800']};

  transition: 0.35s;
`
export const Logo = styled.div`
  height: fit-content;
  max-height: 3.5rem;
  min-height: 2.5rem;
  padding: 0.4rem 0.5rem;

  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`
export const Content = styled.ul`
  flex: 1;
  height: fit-content;
  overflow: hidden auto;
  color: #fff;
  padding-inline: 0.5rem;
`
export const Item = styled.li`
  height: fit-content;
  margin-bottom: 0.25rem;

  display: flex;
  flex-direction: row;

  border-radius: 5px 0 0 5px;
  border-right: 5px solid transparent;

  &:hover {
    background-color: #393839;
    border-right-color: ${(props) => props.theme['blue-700']};
  }

  a {
    display: flex;
    flex-direction: row;
    column-gap: 0.75rem;
    justify-content: start;
    align-items: center;

    width: 100%;
    color: white;
    padding: 0.4rem 0.5rem;

    text-decoration: none;

    &:is(:active, :focus, :visited) {
      color: white;
    }

    svg {
      min-width: 24px;
    }

    p {
      white-space: nowrap;
      flex: 1;
    }
  }
`

interface INavButtonProps {
  $isactive: true | false
}

export const NavButton = styled.button<INavButtonProps>`
  width: 2.125rem;
  height: 2.125rem;
  min-height: 2.125rem;

  border-radius: 50%;
  background-color: white;
  transform: rotate(0);

  transform: ${(props) =>
    !props.$isactive &&
    css`
      rotate(180deg);
    `};

  position: absolute;
  right: -1rem;
  top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`
