import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']}
  }

  body {
    background-color: ${(props) => props.theme['gray-50']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  }

  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }

`
