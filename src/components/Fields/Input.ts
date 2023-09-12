import { styled } from 'styled-components'

export const FieldInput = styled.input`
  width: 100%;
  height: 2rem;
  flex: 1;
  padding: 0 0.5rem;

  outline: none;
  /* border: none; */

  color: black;

  &:active {
    outline: 0;
    /* border-color: ${(props) => props.theme['blue-700']}; */
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }

  &:focus {
    box-shadow: none !important;
  }
`
