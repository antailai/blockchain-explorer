import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home';
import SearchBlock from './components/searchBlock';
import SearchTransaction from './components/searchTransaction';
import Statistics from "./components/statistics";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} >
          <Route path="searchBlock" component={SearchBlock} />
          <Route path="searchTransaction" component={SearchTransaction} />
          <Route path="statistics" component={Statistics} />
        </Route>
      </Router>
    );
  }
}

export default App;
