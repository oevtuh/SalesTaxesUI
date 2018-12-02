import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Home from './containers/home';
import Cart from './containers/cart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h3> Taxes  </h3>
          <h4>
            <small> Cost Calculator (All units per month)</small>
          </h4>
          <Router>
            <div>
              <Route exact path="/home" component={Home} />
              <Route exact path="/cart" component={Cart} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
