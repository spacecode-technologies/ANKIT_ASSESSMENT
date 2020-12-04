import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/homepage" component={HomePage}/>
      <Route path='/' component={LoginPage}/>
    </Switch>
    </Router>
  )
}

export default App
