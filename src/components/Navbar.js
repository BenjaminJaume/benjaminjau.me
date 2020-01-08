import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about-me">About me</Link>
    //     </li>
    //     <li>
    //       <Link to="/portfolio">Portfolio</Link>
    //     </li>
    //     <li>
    //       <Link to="/resume">Resume</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <a className="navbar-brand mx-auto pr-3" href="/">
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
              <i className="material-icons align-bottom">home</i>
              Home
            </NavLink>
            {/* <span className="sr-only">(current)</span> */}
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-me"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom">info</i>
              About me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Portfolio"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom">folder</i>
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active" className="nav-link">
              <i className="material-icons align-bottom">list_alt</i>
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Contact"
              activeClassName="active"
              className="nav-link"
            >
              <i className="material-icons align-bottom">person</i>
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
            <i className="material-icons align-bottom">save_alt</i>
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
