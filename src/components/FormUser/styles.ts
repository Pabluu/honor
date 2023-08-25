import { styled } from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.35rem;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 700;
      padding-block-end: 0.2rem;
      cursor: pointer;
      width: fit-content;
    }

    input {
      width: 100%;
      height: 2.21rem;
      padding: 0.5rem;

      outline: none;
      border: 1px solid ${(props) => props.theme['gray-700']};
      border-radius: 3px;

      color: black;

      &:active {
        outline: 0;
        border-color: ${(props) => props.theme['blue-700']};
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }

  button {
    height: 2.5rem;
    width: 100%;

    background-color: ${(props) => props.theme['blue-700']};
    color: white;

    outline: 0;
    border: 1px solid ${(props) => props.theme['blue-700']};
    border-radius: 5px;

    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background-color: ${(props) => props.theme['blue-500']};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['blue-700']};
      border: 1px solid ${(props) => props.theme['blue-700']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
