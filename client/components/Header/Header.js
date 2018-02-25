import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import CurrentUser from '../../queries/CurrentUser'
import Logout from '../../mutations/Logout'

class Header extends Component {
  onLogout = () => {
    this.props.logout({
      refetchQueries: [{
        query: CurrentUser,
      }],
    })
  }

  renderButtons() {
    const { loading, user } = this.props.data

    if (loading) {
      return <div>Loading...</div>
    }

    if (user) {
      return (
        <li>
          <a title={`Logout, ${user.email}?`} onClick={this.onLogout}>Logout</a>
        </li>
      )
    }
    return (
      <React.Fragment>
        <li>
          <Link to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login">
             Login
          </Link>
        </li>
      </React.Fragment>
    )
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default compose(
  graphql(CurrentUser),
  graphql(Logout, { name: 'logout' })
)(Header)
