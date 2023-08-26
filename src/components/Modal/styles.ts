import { keyframes, styled } from 'styled-components'

const progress = keyframes`
  to{
    width: 0;
  }
`

export const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: fit-content;

  padding: 1rem;

  position: fixed;
  top: 5rem;
  right: 2rem;

  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-1000']};

  border: 2px solid ${(props) => props.theme['red-600']};
  border-radius: 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0.75rem;

    background-color: ${(props) => props.theme['red-600']};

    animation: ${progress} 3s forwards;
  }
  div {
    flex: 1;
    font-weight: bold;
  }

  svg {
    width: fit-content;
    cursor: pointer;
    line-height: 0;
  }
`
