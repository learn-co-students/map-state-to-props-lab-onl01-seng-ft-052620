import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const genUsers = this.props.users.map( (user,i) => {
      return (
        <li key={i}>
          {user.username}
        </li>
      )
    })

    const numUsers = this.props.users.length

    return (
      <div>
        <ul>
          Users!
          <p></p>
          {genUsers}
          <p></p>
          Number of Users: { numUsers }
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapState)(Users)
