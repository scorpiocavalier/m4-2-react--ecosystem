import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import SellersPage from './SellersPage'
import SellerDetailsPage from './SellerDetailsPage'
import ItemDetailsPage from './ItemDetailsPage'
import GlobalStyles from './globalstyles'

const App = props => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route exact path="/sellers"><SellersPage /></Route>
        <Route path="/sellers/:sellerId"><SellerDetailsPage /></Route>
        <Route path="/items/:itemId"><ItemDetailsPage /></Route>
      </Switch>
    </Router>
  )
}

export default App