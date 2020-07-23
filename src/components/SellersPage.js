import React from 'react';
import { sellers } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SellersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SellerWrapper = styled.div`
  display: flex;
  margin: 20px 0 40px 0;
`

const SellerAvatar = styled.img`
  width: 200px;
  border-radius: 50%;
`

const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 300px;
`

const SellerName = styled.h2`
  margin: 10px 0;
  font-size: 32px;
  color: #6600ff;
  border-bottom: 4px solid #6600ff;
`

const SellerStoreName = styled.h3`
  font-size: 24px;
  margin: 10px 0 5px 0;
`

const SellerDescription = styled.h4`
  font-style: italic;
`

const StyledLink = styled(Link)`
  font-size: 18px;
  margin: 20px 0 10px 0;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 5px;
  background-color: #6600ff;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    background-color: green;
  }
`

export default () => {
  return (
    <SellersWrapper>
    {
      Object.values(sellers).map(seller => {
        return (
          <SellerWrapper>
            <SellerAvatar src={seller.avatarSrc} />
            <SellerInfo>
              <SellerName>{seller.id.toUpperCase()}</SellerName>
              <SellerStoreName>{seller.storeName}</SellerStoreName>
              <SellerDescription>{seller.description}</SellerDescription>
              <StyledLink to={`/sellers/${seller.id}`}>View Items</StyledLink>
            </SellerInfo>
          </SellerWrapper>
        )
      })
    }
    </SellersWrapper>
  )
}
