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
  top: 1rem;
  /* right: 2rem; */

  background-color: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-1000']};

  border: 2px solid ${(props) => props.theme['gray-1000']};
  border-radius: 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0.25rem;

    background-color: ${(props) => props.theme['blue-600']};

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
