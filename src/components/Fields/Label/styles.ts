import { styled } from 'styled-components'
interface ContainerProps {
  transform: true | undefined
}

export const Container = styled.label<ContainerProps>`
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  width: fit-content;

  color: ${(props) => props.theme['gray-700']};

  text-transform: ${(props) => props.transform && 'uppercase'};
`
