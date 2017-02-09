import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand, NavDropdown , MenuItem} from 'react-bootstrap';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';
import { Link } from 'react-router';


class HeaderComponent extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: AuthStore.isAuthenticated()
    }
    // this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
  }

  render() {
    return (
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" className="navbar-left"><img src='../logo.png'/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
          <Nav pullRight>
            <NavItem onClick={this.login}>Home</NavItem>
            <NavItem onClick={this.login}>Page 0</NavItem>
              { !this.state.authenticated ? (
              <NavItem onClick={this.login}><Link to={'/login'}>  Login </Link> </NavItem>
              ) : (
                <NavItem onClick={this.logout}>Logout</NavItem>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
