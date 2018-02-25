import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChangeInput= (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  };

  render() {
    const { email, password } = this.state

    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={this.handleChangeInput}
              id="email"
              name="email"
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.handleChangeInput}
              id="password"
              name="password"
              type="text"
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
