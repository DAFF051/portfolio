import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header () {
  return (
    <Navbar className="px-lg-6 border-bottom border-tertiary-light" expand="lg" variant="light">
      <div className="container px-lg-3">
        <Navbar.Brand href="/"><i className="ai-logo-artlimes" /><span className="px-3">Mohammed Alabdali</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-lg-auto">
            <a to="who-we-are" className="mx-4 text-secondary text-decoration-none"><h5>Who I am</h5></a>
            <a to="what-we-do" className="mx-4 text-secondary text-decoration-none"><h5>What I do</h5></a>
            <a to="contact-us" className="mx-4 text-secondary text-decoration-none"><h5>Contact</h5></a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
