import React, { Component } from 'react'
import classes from './AuthForm.css'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state)
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="row">
        <form
          onSubmit={this.onSubmit}
          className="col s6"
        >
          <div className="input-field">
            <input
              placeholder="Email"
              value={email}
              onChange={this.handleChangeInput}
              id="email"
              name="email"
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              value={password}
              onChange={this.handleChangeInput}
              id="password"
              name="password"
              type="password"
            />
          </div>

          <div className={classes.error}>
            {this.props.errors.map((error) => (<div key={error}>{error}</div>))}
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
