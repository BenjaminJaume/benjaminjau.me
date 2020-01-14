import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Home, Info, Folder, ListAlt, Person } from "@material-ui/icons";
import "./NavigationBar.css";
import ButtonResume from "../ButtonResume/ButtonResume";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="navbar"
    >
      <Navbar.Brand as={NavLink} to="/" href="/">
        <img
          src="./images/favicon/benjaminjaume-logo.png"
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
          <IndexLinkContainer to="/">
            <Nav.Link as={NavLink} to="/" href="/" active={false}>
              <Home className="align-bottom mr-1" />
              Home
            </Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/portfolio">
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              href="/portfolio"
              active={false}
            >
              <Folder className="align-bottom mr-1" />
              Portfolio
            </Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/resume">
            <Nav.Link as={NavLink} to="/resume" href="/resume" active={false}>
              <ListAlt className="align-bottom mr-1" />
              Resume
            </Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/about-me">
            <Nav.Link
              as={NavLink}
              to="/about-me"
              href="/about-me"
              active={false}
            >
              <Info className="align-bottom mr-1" />
              About me
            </Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/contact">
            <Nav.Link as={NavLink} to="/contact" href="/contact" active={false}>
              <Person className="align-bottom mr-1" />
              Contact
            </Nav.Link>
          </IndexLinkContainer>
        </Nav>
        <div className="d-flex justify-content-center m-2">
          <ButtonResume displayMessage="Resume" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
