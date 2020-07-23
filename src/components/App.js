import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
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
        <Route path="/items/:itemId"><ItemDetailsPage /></Route>
      </Switch>
    </Router>
  )
}

export default App