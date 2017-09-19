import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './Users';
import UserInfo from './Components/UserInfo';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Users}/>
      <Route path="/:userId" component={UserInfo} />
    </div>
  </Router>
)

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
