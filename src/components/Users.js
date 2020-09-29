import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
  let allUsers = this.props.users.map((user, index) => <li key ={index}>{user.username} : {user.hometown}</li>)
    return (
      <div>
          {this.props.numberOfUsers}
        <ul>
          Users!
          {allUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
let mapStateToProps = (state) =>{
  return {
    users: state.users,
    numberOfUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)

