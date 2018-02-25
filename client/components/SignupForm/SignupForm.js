import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from '../AuthForm/AuthForm'
import Signup from '../../mutations/Signup'
import CurrentUser from '../../queries/CurrentUser'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
    }
  }

  onSubmit = ({ email, password }) => {
    this.props.signup({
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
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default graphql(Signup, { name: 'signup' })(SignupForm)
