import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ borderBottom: "1px solid var(--emerald)" }}
    >
      <Navbar.Brand as={NavLink} to="/" href="/">
        <img
          src="./images/benjaminjaume-logo.png"
          alt="Benjamin Jaume"
          className="d-inline-block align-top mr-2"
          width="30"
          height="30"
        />
        Benjamin Jaume
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" href="/">
            <i className="material-icons align-bottom mr-1">home</i>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about-me" href="/about-me">
            <i className="material-icons align-bottom mr-1">info</i>
            About me
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" href="/portfolio">
            <i className="material-icons align-bottom mr-1">folder</i>
            Portfolio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/resume" href="/resume">
            <i className="material-icons align-bottom mr-1">list_alt</i>
            Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" href="/contact">
            <i className="material-icons align-bottom mr-1">person</i>
            Contact
          </Nav.Link>
        </Nav>
        <div className="download-button d-flex justify-content-center">
          <Button variant="success">
            <i className="material-icons align-bottom mr-1">save_alt</i>
            Resume
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
