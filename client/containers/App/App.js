import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Header from './../../components/Header/Header'
import Home from './../../components/Home/Home'


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
)

export default withRouter(App)
