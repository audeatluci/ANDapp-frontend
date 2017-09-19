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
    return (
      <div className="Users">
        <h1>Users</h1>
        <h2>Displayed using a shit load of JS</h2>
        {this.state.users.map(user =>
          <Link key={user.id} to={`./${user.id}`}>
            <User name={user.name} />
          </Link>
        )}

        <Route path={`./:userId`} component={UserInfo}/>
      </div>
    );
  }
}

export default Users;