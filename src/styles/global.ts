import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *, button, input {
    outline: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background: transparent;
    border: none;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => darken(0.05, theme.colors.secundary)};
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`
