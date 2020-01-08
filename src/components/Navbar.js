import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <a className="navbar-brand mx-auto pr-3" href="/">
        <img
          src="./images/benjaminjaume-logo.png"
          alt="Benjamin Jaume"
          className="d-inline-block align-top mr-2"
          width="30"
          height="30"
        />
        Benjamin Jaume
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink to="/" activeClassName="active" className="nav-link">
              <i className="material-icons align-bottom mr-1">home</i>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-me"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom mr-1">info</i>
              About me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom mr-1">folder</i>
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active" className="nav-link">
              <i className="material-icons align-bottom mr-1">list_alt</i>
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom mr-1">person</i>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="d-flex justify-content-center download-button">
          <button
            className="btn btn-success"
            type="button"
            // onClick="clickCounter()"
          >
            <i className="material-icons align-bottom mr-1">save_alt</i>
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
