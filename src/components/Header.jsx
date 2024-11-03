import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get the current location
  return (
    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand className="text-white" as={Link} to="/">Employee-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
 {/* Only show the "Add" link on the "/home" page */}
 {location.pathname === '/home' && (
              <Nav.Link as={Link} to="/add">Add</Nav.Link>
            )}          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
