import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

interface LinkProps {
  sizeW?: string
}

export const LinkTo = styled(NavLink)<LinkProps>`
  width: ${(props) => props.sizeW};
  min-width: fit-content;
  height: 2.5rem;
  padding: 6px 8px;
  background-color: transparent;
  /* color: ${(props) => props.theme['blue-700']}; */
  color: white;

  /* border: 1px solid ${(props) => props.theme['blue-700']}; */
  border: none;
  border-radius: 5px;

  word-wrap: normal;
  text-decoration: none;
  text-align: center;

  line-height: 1;

  &:hover {
    background-color: #393839;
    /* color: white; */
  }
  &:active {
    text-decoration: none;
  }
`
