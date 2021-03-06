import React from 'react';
import {
  Link
} from 'react-router-dom';

class UserInfo extends React.Component {
  state = {hasLoaded: false};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return fetch(`/users/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(user => this.setState( ...user ));
  }

  render() {
    console.log(this.state);
    return (
      <div className="UserInfo">
        <h3>Hey {this.state.firstName} {this.state.lastName}!</h3>
        <hr />
        <h4>Details</h4>
        <ul>
          <li>Age: {this.state.age}</li>
          <li>Nationality: {this.state.nationality}</li>
        </ul>
        <hr/>
        <Link to="/">Back to all users</Link>
      </div>
    )
  }
}

export default UserInfo;