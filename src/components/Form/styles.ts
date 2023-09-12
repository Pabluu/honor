import { styled } from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.25rem;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 700;
      font-size: 0.8rem;
      /* padding-block-end: 0.1rem; */
      cursor: pointer;
      width: fit-content;

      color: ${(props) => props.theme['gray-700']};
    }

    input {
      width: 100%;
      height: 2rem;
      padding: 0 0.5rem;

      outline: none;
      border: none;

      /* border-radius: 3px; */

      color: black;

      &:active {
        outline: 0;
        border-color: ${(props) => props.theme['blue-700']};
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-400']};
      }

      &:focus {
        box-shadow: none !important;
      }
    }
  }
`
