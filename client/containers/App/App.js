import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Header from './../../components/Header/Header'
import Home from './../../components/Home/Home'
import LoginForm from '../../components/LoginForm/LoginForm'
import AuthForm from '../../components/AuthForm/AuthForm'


const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={AuthForm} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  </div>
)

export default withRouter(App)
