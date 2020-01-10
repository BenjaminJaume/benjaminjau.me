import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import {
  Home,
  Info,
  Folder,
  ListAlt,
  Person,
  SaveAlt
} from "@material-ui/icons";

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
            <Home className="align-bottom mr-1" />
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about-me" href="/about-me">
            <Info className="align-bottom mr-1" />
            About me
          </Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" href="/portfolio">
            <Folder className="align-bottom mr-1" />
            Portfolio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/resume" href="/resume">
            <ListAlt className="align-bottom mr-1" />
            Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" href="/contact">
            <Person className="align-bottom mr-1" />
            Contact
          </Nav.Link>
        </Nav>
        <div className="download-button d-flex justify-content-center">
          <Button variant="success">
            <SaveAlt className="align-bottom mr-1" />
            Resume
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
