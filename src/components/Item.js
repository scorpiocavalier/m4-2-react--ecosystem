import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
`

const Image = styled.img`
  width: 100%;
  height: 20vw;
`

const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
`

const LatinName = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export default ({ id, src, name, latinName }) => {
  return (
      <Wrapper>
        <Link to={`/items/${id}`}>
          <Image src={src} alt={name} />
        </Link>
        <Name>{name}</Name>
        <LatinName>{latinName}</LatinName>
      </Wrapper>
  )
}
