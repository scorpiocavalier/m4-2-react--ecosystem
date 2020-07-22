import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  gap: 20px 10px;
  justify-items: center;
  padding: 20px;
`

export default ({ items }) => {
  return (
    <Wrapper>
      {
        items.map(({ imageSrc, name, latinName }) => {
          return <Item src={imageSrc} name={name} latinName={latinName} />
        })
      }
    </Wrapper>
  )
}