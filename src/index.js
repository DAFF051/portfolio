import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import '../scss/main.scss';

function Welcome () {
  return <h1 className="main border border-danger">Hello World from React boilerplate</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById('root'));

