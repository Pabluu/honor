import styled, { css } from 'styled-components'

interface INavbarContainerProps {
  $isactive: true | false
}

export const NavbarContainer = styled.aside<INavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  padding-inline: 0.5rem;

  width: 3.25rem;
  ${(props) =>
    props.$isactive &&
    css`
      width: 15rem;
    `};
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  background-color: ${(props) => props.theme['gray-800']};

  transition: 0.35s;
  z-index: 100;
  box-shadow: 0 4px 5px 0 black;
`
export const Logo = styled.span`
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

  &:has(> a.active) {
    background-color: #393839;
    border-right-color: #1d4ed8;
  }

  & > * {
    display: flex;
    flex-direction: row;
    column-gap: 0.75rem;
    justify-content: start;
    align-items: center;

    width: 100%;
    color: white;
    padding: 0.4rem 0.5rem;

    text-decoration: none;
    text-align: left;

    background-color: transparent;
    border: none;
    /* border-right: 5px solid rgb(217 217 217/20%); */
    border-radius: 5px 0 0 5px;

    &.active {
      background-color: rgb(217 217 217/20%);
    }
    &:hover {
      background-color: #393839;
      border-right: 5px solid rgb(217 217 217/20%);
    }

    /* &.active {
      border-right: 5px solid ${(props) => props.theme['blue-700']};
    } */

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
  width: 100%;
  height: 3.5rem;
  min-height: 2.125rem;

  background-color: transparent;
  border: none;
  transform: rotate(180deg);

  transform: ${(props) =>
    !props.$isactive &&
    css`
      rotate(0deg);
    `};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #393839;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`
