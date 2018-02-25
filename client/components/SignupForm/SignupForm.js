import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from '../AuthForm/AuthForm'
import Signup from '../../mutations/Signup'
import CurrentUser from '../../queries/CurrentUser'

class SignupForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.signup({
      variables: { email, password },
    })
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          errors={[]}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default graphql(Signup, { name: 'signup' })(SignupForm)
