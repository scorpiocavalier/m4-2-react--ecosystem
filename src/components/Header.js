import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

const LogoLink = styled(Link)`
  font-weight: 800;
  font-size: 32px;
  color: black;
  &:visited, &:hover {
    color: black;
  }
`

const List = styled.ul`
  display: flex;
`

const HeaderLinks = styled(NavLink)`
  font-size: 20px;
  &.active {
    border-bottom: 3px solid;
  }
`

const Header = () => {
  return (
    <Nav>
      <LogoLink to="/">Fruit Emporium</LogoLink>
      <List>
        <li>
          <HeaderLinks exact to="/" activeClassName="active">Home</HeaderLinks>
        </li>
        <li>
          <HeaderLinks exact to="/sellers" activeClassName="active">Sellers</HeaderLinks>
        </li>
        <li>
          <HeaderLinks to="/about" activeClassName="active">About</HeaderLinks>
        </li>
      </List>
    </Nav>
  )
}

export default Header