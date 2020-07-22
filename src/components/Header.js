import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
`

const StyledListItems = styled.li`
  padding: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Header = () => {
  return (
    <StyledNav>
      <h1>Fruit Emporium</h1>
      <StyledNavList>
        <StyledListItems>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItems>
        <StyledListItems>
          <StyledLink to="/about">About</StyledLink>
        </StyledListItems>
      </StyledNavList>
    </StyledNav>
  )
}

export default Header