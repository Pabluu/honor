import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const LinkTo = styled(NavLink)`
  width: fit-content;
  min-width: 50%;
  background-color: white;
  color: ${(props) => props.theme['blue-700']};

  border: 1px solid ${(props) => props.theme['blue-700']};
  border-radius: 5px;

  word-wrap: normal;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    /* color: white; */
  }
  &:active {
    text-decoration: none;
  }
`
