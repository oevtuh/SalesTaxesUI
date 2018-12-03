import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/home';
import Cart from './containers/cart';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h3> Taxes </h3>
          <h4>
            <small> Cost Calculator</small>
          </h4>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Tax app</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="/home">
                Catalog
              </NavItem>
              <NavItem eventKey={2} href="/cart">
                Cart
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <Router>
          <div>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
