import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from '../AuthForm/AuthForm'
import Login from '../../mutations/Login'
import CurrentUser from '../../queries/CurrentUser'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
    }
  }

  onSubmit = ({ email, password }) => {
    this.props.login({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUser }],
    })
      .then(() => this.props.history.push('/'))
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message)

        this.setState({ errors })
      })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default graphql(Login, { name: 'login' })(LoginForm)
