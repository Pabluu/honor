import { styled } from 'styled-components'

export const ButtonIcon = styled.button`
  width: fit-content;
  height: 2.25rem;
  line-height: 0;

  background-color: transparent;
  color: ${(props) => props.theme['gray-400']};

  border: 0;
  border-radius: 0;
  padding-inline: 0.25rem;

  transition: none;

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background-color: transparent;
  }
`
