import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  gap: 30px 30px;
  justify-items: center;
  margin: 40px 0;
`

export default ({ items }) => {
  return (
    <Wrapper>
      {
        items.map(({ id, imageSrc, name, latinName }) => {
          return <Item key={id} id={id} src={imageSrc} name={name} latinName={latinName} />
        })
      }
    </Wrapper>
  )
}