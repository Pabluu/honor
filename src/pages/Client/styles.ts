import styled from 'styled-components'

export const ClientContainer = styled.div`
  margin: 5rem 3.5rem 0 7rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const ClientHead = styled.div`
  display: flex;
  column-gap: 1rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.75rem;

  flex: 1;
`

export const NewClient = styled.a`
  display: flex;
  /* column-gap: 0.5rem; */
  flex-basis: 9.5rem;
  align-items: center;

  border: 2px solid ${(props) => props.theme['green-500']};
  border-radius: 5px;

  width: 9.5rem;
  height: 2.625rem;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  svg {
    margin-inline: 0.25rem;
  }

  button {
    border: none;
    border-radius: 0;

    background-color: ${(props) => props.theme['green-500']};
    color: white;

    height: 100%;

    flex: 1;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
    }
  }
`

export const ClientTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  height: fit-content;

  & .all {
    flex: 1;
  }

  tr {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tbody tr {
    background-color: #f4f4f5;
  }

  tbody tr:nth-child(odd) {
    background-color: #d4d4d8;
  }

  th {
    text-align: left;
  }
`
