import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import '../scss/main.scss';
import Header from './components/navbar';
import Footer from './components/footer';
import Welcome from './pages/home';
import About from './pages/about';

function App () {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

