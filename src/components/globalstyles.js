import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'arial';
  }

  body {
    margin: 0 100px;
  }

  p {
    margin: 20px 0;
  }

  li {
    padding-left: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #6600ff;
    &:visited {
      color: #6600ff;
    }
    &:hover {
      color: green;
    }
  }

  button {
    background-color: #6600ff;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    &:hover {
      background-color: green;
    }
  }
`

export const BoldText = styled.span`
  font-weight: 600;
`

export default GlobalStyles