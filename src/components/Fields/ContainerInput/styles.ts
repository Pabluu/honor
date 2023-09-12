import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 2.25rem;

  display: flex !important;
  flex-direction: row !important;
  align-items: center;

  border: 2px solid ${(props) => props.theme['gray-500']};
  border-radius: 5px;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['blue-700']};
  }

  &:focus-within > button {
    color: ${(props) => props.theme['blue-700']};
  }
`
