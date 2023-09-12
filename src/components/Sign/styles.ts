import styled from 'styled-components'

export const SignContainer = styled.div`
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
