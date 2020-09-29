import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          { this.props.users.map(u => <li>{u.username}</li>)/*usernames of all users in the Redux store */}
          {this.props.userCount/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
//export default Users
