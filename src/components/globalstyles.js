import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'arial';
  }

  p {
    padding: 20px;
  }

  li {
    padding: 0 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none
  }

  a:visited {
    color: black;
  }
`

export default GlobalStyles