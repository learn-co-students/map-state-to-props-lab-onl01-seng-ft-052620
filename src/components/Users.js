import React, { Component } from 'react';
import { connect } from 'react-redux'

// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    debugger
    return (
      
      <div>
        <ul>
          Users!
         {users}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
 
}
        


// connect this component to Redux
export default connect(mapStateToProps)(Users);

