import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact>Home</Route>
        <Route path="/about">About</Route>
      </Switch>
    </Router>
  )
}

export default App;
