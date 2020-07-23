import React from 'react';
import { useParams } from 'react-router-dom'
import { sellers, items } from '../data'
import styled from 'styled-components'
import { BoldText } from './globalstyles'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  margin: 40px 0;
`

const Image = styled.img`
  height: 100%;
  border-radius: 25px;
`

const ItemInfo = styled.div`
  width: 600px;
  max-height: 100%;
  margin-left: 40px;
`

const ItemName = styled.h2`
  font-size: 32px;
  font-weight: 800;
`

const ItemLatinName = styled.h3`
  font-size: 16px;
  font-style: italic;
  opacity: 0.5;
  padding-bottom: 10px;
`

const ItemDescription = styled.p`
  font-size: 14px;
  padding: 10px 0;
`

const ItemOrigin = styled.p`
  font-size: 14px;
  font-style: italic;
  padding-top: 5px;
`

const Button = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  font-size: 24px;
  padding: 10px 0;
  margin: 30px 0;
  background-color: ${({ quantity }) => quantity > 0 ?  "#6600ff" : "gray"};
  &:hover {
    background-color: ${({ quantity }) => quantity > 0 ? "#6600ff" : "gray"};
  }
`

const ItemInfoGroup = styled.div`
  display: flex;
  align-items: center;
`

const ItemSeller = styled.img`
  width: 50px;
  border-radius: 50%;
`

const SellerStore = styled.span`
  margin-left: 10px;
`

export default () => {
  const { itemId } = useParams()
  const item = Object.values(items).find(item => item.id === itemId)
  const seller = Object.values(sellers).find(seller => seller.id === item.sellerId)

  return (
    <Wrapper>
      <Image src={item.imageSrc} alt={item.name} />
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemLatinName>{item.latinName}</ItemLatinName>
        <ItemDescription>{item.description}</ItemDescription>
        <ItemOrigin>Product of <BoldText>{item.countryOfOrigin}</BoldText></ItemOrigin>
        <Button quantity={item.quantity}>
          {
            item.quantity > 0
              ? `$${item.price} - Buy now`
              : `out of stock`
          }
        </Button>
        <ItemInfoGroup>
          <ItemSeller src={seller.avatarSrc} alt={seller.id} />
          <Link to={`/sellers/${seller.id}`}>
            <SellerStore>Sold by: <BoldText>{seller.storeName}</BoldText></SellerStore>
          </Link>
        </ItemInfoGroup>
      </ItemInfo>
    </Wrapper>
  )
}
