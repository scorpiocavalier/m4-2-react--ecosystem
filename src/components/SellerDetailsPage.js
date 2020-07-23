import React from 'react';
import { useParams } from 'react-router-dom';
import ListingGrid from './ListingGrid';
import { sellers, items } from '../data'
import styled from 'styled-components'

const SellerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SellerAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 20px;
`

const SellerStore = styled.h2`
  border-bottom: 3px solid #6600ff;
  margin-bottom: 10px;
`

const SellerDescription = styled.h3`
  font-style: italic;
`

export default () => {
  const { sellerId } = useParams()
  const sellerItems = Object.values(items).filter(item => item.sellerId === sellerId)
  const seller = Object.values(sellers).find(seller => seller.id === sellerId)
  return (
    <>
      <SellerWrapper>
        <SellerAvatar src={seller.avatarSrc} alt={seller.id}/>
        <SellerStore>{seller.storeName.toUpperCase()}</SellerStore>
        <SellerDescription>{seller.description}</SellerDescription>
      </SellerWrapper>
      <ListingGrid items={sellerItems} />
    </>
  )
}
