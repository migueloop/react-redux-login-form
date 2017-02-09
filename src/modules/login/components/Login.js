import React, { Component } from 'react';
import {Form , FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { Actions } from 'flux/flux';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false
    }
    this._onSubmit = this._onSubmit.bind(this)
  }

  _onSubmit () {
    event.preventDefault();
    userActions = new Actions().Common;
    //actions.login({...})
  }


  render() {
    return (
      <div>
        { !this.state.authenticated ? (
          <Col mdOffset={4} smOffset={3} lgOffset={6}>
            <form onSubmit={this._onSubmit}>
            <Form horizontal onSubmit={this.onSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>
                  Email
                </Col>
                <Col sm={6}>
                  <FormControl type="text" placeholder="Username" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>
                  Password
                </Col>
                <Col sm={6}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={6}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={6}>
                  <Button type="submit">
                    Log in
                  </Button>
                </Col>
              </FormGroup>
              </Form>
            </form>
          </Col>

        ) : (
          <h2>Welcome!</h2>
        )}
      </div>
    );
  }
}

export default Login;
