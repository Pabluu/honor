import { styled } from 'styled-components'

export const InContainer = styled.div`
  width: 23rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.2rem;
  padding: 1.5rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['gray-1000']};
  font: 700 1.5rem Roboto;

  border-bottom: 1px solid ${(props) => props.theme['gray-700']};
  height: 2.5rem;
`

export const DescriptionSignIn = styled.div`
  width: 23rem;
  height: 100%;

  padding: 1rem;

  background-color: ${(props) => props.theme['blue-700']};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.75rem;

  &::selection {
    background-color: white;
    color: ${(props) => props.theme['blue-700']};
  }

  h1 {
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  p {
    color: white;
  }
`
