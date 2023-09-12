import styled from 'styled-components'

export const Container = styled.div`
  height: fit-content;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.4);
  padding: 1rem;

  display: flex;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`

export const SignContainer = styled.div`
  width: 23rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.2rem;
  padding: 1.5rem;
`

export const DescriptionSignUp = styled.div`
  width: 23rem;
  /* height: 100%; */

  padding: 1rem;

  background-color: ${(props) => props.theme['blue-700']};
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.75rem;

  @media (max-width: 770px) {
    width: 100%;
    padding: 0.25rem;
    background-color: transparent;
    padding-inline: 1.5rem;

    & *:not(a) {
      display: none;
    }

    a {
      width: 100%;
    }
  }

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

  button {
    width: 50%;
    background-color: white;
    color: ${(props) => props.theme['blue-700']};

    border: 1px solid ${(props) => props.theme['blue-700']};
    border-radius: 5px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
      /* color: white; */
    }
  }
`
