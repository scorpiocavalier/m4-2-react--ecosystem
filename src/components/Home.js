import React from 'react';
import ListingGrid from './ListingGrid'
import { items } from '../data'

export default () => {
  return (
    <>
      <p>Fruit Emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid items={Object.values(items)} />
    </>
  )
}