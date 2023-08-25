import { styled } from 'styled-components'

export const UpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.25rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['gray-1000']};
  font: 700 1.5rem Roboto;

  border-bottom: 1px solid ${(props) => props.theme['gray-700']};
  height: 2.65rem;
`
