import React from 'react';
import ListingGrid from './ListingGrid'
import { items } from '../data'
import { BoldText } from './globalstyles'

export default () => {
  return (
    <>
      <p>Fruit Emporium sells the finest fruits from this world and beyond.</p>
      <p><BoldText>Browse items:</BoldText></p>
      <ListingGrid items={Object.values(items)} />
    </>
  )
}