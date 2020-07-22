import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import GlobalStyles from './globalstyles'

const App = props => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/about"><About /></Route>
      </Switch>
    </Router>
  )
}

export default App