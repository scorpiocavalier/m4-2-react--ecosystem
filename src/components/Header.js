import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Logo = styled.h1`
  font-weight: 800;
  font-size: 32px;
`

const List = styled.ul`
  display: flex;
`

const HeaderLinks = styled(Link)`
  font-size: 20px;
`

const Header = () => {
  return (
    <Nav>
      <Logo>Fruit Emporium</Logo>
      <List>
        <li>
          <HeaderLinks to="/">Home</HeaderLinks>
        </li>
        <li>
          <HeaderLinks to="/about">About</HeaderLinks>
        </li>
      </List>
    </Nav>
  )
}

export default Header