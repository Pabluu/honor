import { styled } from 'styled-components'

export const MessageError = styled.span`
  color: ${(props) => props.theme['red-600']};
  font-weight: bold;
  transition: all 1s;
  min-height: 19px;
  margin-top: 5px;
  font-size: 0.95rem;
`

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
      border-bottom: 1px solid ${(props) => props.theme['gray-400']};

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
        border-bottom: 1px solid ${(props) => props.theme['blue-700']};
        box-shadow: none !important;
      }
    }
  }
`
