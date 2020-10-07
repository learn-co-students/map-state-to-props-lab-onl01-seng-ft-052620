import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  displayUsers = () => {
    return this.props.users.map((user, index) => (
      <li key={index}>
        <h3>{user.username}</h3>
        <p>{user.hometown}</p>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.displayUsers()}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
