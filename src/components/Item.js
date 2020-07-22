import React from 'react';
import styled from 'styled-components'

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

export default ({ src, name, latinName }) => {
  return (
      <Wrapper>
        <Image src={src} alt={name} />
        <Name>{name}</Name>
        <LatinName>{latinName}</LatinName>
      </Wrapper>
  )
}
