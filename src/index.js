import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/scss/bootstrap.scss';
import '../scss/main.scss';
import Header from './components/navbar';
import Footer from './components/footer';
import Welcome from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App () {
  axios({
    method: 'GET',
    url: 'http://localhost:5000/',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res.data.message);
  });
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
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

