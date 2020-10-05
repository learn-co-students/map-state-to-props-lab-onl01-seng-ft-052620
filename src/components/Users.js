import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        Number of Users: {this.props.totalUsers}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, totalUsers: state.users.length };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
