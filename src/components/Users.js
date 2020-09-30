import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => (
            <li key={this.props.users.indexOf(user)}>{user.username} from {user.hometown}</li>
          ))}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
          <span>total users: {this.props.users.length}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
