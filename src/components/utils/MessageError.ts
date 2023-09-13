import styled from 'styled-components'

export const MessageError = styled.span`
  color: ${(props) => props.theme['red-600']};
  font-weight: bold;
  transition: all 1s;
  min-height: 19px;
  margin-top: 5px;
  font-size: 1rem;
`
