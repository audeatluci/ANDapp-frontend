import React, { Component } from 'react';
import './App.css';
import User from './Components/User';
import UserInfo from './Components/UserInfo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Users extends Component {
  state = {users: []}

  componentDidMount() {
    return fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="Users">
        <h1>Users</h1>
        <h2>Displayed using a shit load of JS</h2>
        {this.state.users.map(user =>
          <Link key={user._id} to={`./${user._id}`}>
            <User name={(!!user.name) ? user.name :user.firstName + ' ' + user.lastName} />
          </Link>
        )}

        <Route path={`./:userId`} component={UserInfo}/>
      </div>
    );
  }
}

export default Users;