import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Players from './components/Players';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/teams' component={Teams} />
            <Route path='/players' component={Players} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
