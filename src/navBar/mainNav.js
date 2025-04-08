import React from "react";

import '.././App.css'; // Import the CSS file
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-white">
          <img
            src="/logo.png"
            alt="Logo"
            height="30"
            className="d-inline-block align-top me-2"
          />
          YourBrand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#seller" className="fw-bold text-white">Seller</Nav.Link>
            <Nav.Link href="#pricing" className="fw-bold text-white">Pricing</Nav.Link>
            <Nav.Link href="#blog" className="fw-bold text-white">Blog</Nav.Link>
            <Nav.Link href="#resources" className="fw-bold text-white">Resources</Nav.Link>
            <Nav.Link href="#evaluation" className="fw-bold text-white">Free Business Evaluation</Nav.Link>
            <Link to='/signup'>
            <Button
              variant="outline-light"
              className="ms-lg-3 mb-2 mb-lg-0 fw-bold text-white custom-hover-black"
            >
              Join Now
            </Button>
            </Link>
            <Button
              variant="light"
              className="ms-2 fw-bold"
              href="#signin"
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
};

export default MainNav;
