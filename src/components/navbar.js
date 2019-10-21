import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navig () {
  return (
    <Navbar className="justify-content-center"bg="dark" variant="dark">
      {/*<Navbar.Brand href="">Navbar</Navbar.Brand>*/}
      <Nav className="">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/about">About</Link></Nav.Link>
        <Nav.Link href="/contact">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navig;
