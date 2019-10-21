import React, { Component } from 'react';
import Navig from './components/navbar';
// import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Contact from './Contact';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navig />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
// ReactDOM.render(<Welcome />, document.getElementById('root'));

