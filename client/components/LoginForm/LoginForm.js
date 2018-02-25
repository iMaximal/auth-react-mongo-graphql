import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from '../AuthForm/AuthForm'
import Login from '../../mutations/Login'
import CurrentUser from '../../queries/CurrentUser'

class LoginForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.login({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUser }],
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default graphql(Login, { name: 'login' })(LoginForm)
