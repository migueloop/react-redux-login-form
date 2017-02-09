import React, { Component } from 'react';
import AuthStore from '../stores/AuthStore';

class IndexComponent extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated()
    }
  }
  render() {
    return (
      <div>
        { !this.state.authenticated ? (
          <h2>Log in to continue</h2>
        ) : (
          <h2>Welcome to the Index Page!</h2>
        )}
      </div>
    );
  }
}

export default IndexComponent;
