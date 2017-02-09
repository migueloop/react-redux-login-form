import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import Login from './modules/users/components/Login';
import App from './components/App';

class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
            <Route path='/login' component={Login} />
        </Route>
      </Router>
    );
  }
}

export default Root;
