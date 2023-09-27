import styled from 'styled-components'

interface ButtonProps {
  size?: string
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.size};
  background-color: white;
  color: ${(props) => props.theme['blue-700']};

  border: 1px solid ${(props) => props.theme['blue-700']};
  border-radius: 5px;

  &:hover {
    background-color: rgba(37, 99, 235, 0.85);
    color: white;
  }
`
