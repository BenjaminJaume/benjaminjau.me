import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    <i className="material-icons align-bottom">home</i>
                    Home
                    {/* <!-- <span className="sr-only">(current)</span> --> */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-me">
                    <i className="material-icons align-bottom">info</i>
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">
                    <i className="material-icons align-bottom">folder</i>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">
                    <i className="material-icons align-bottom">list_alt</i>
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <i className="material-icons align-bottom">person</i>
                    Contact
                  </a>
                </li>
              </ul>

              <div className="d-flex justify-content-center download-button">
                <button className="btn btn-success" type="button">
                  {/* onClick="clickCounter()" */}
                  <i className="material-icons align-bottom">save_alt</i>
                  Resume
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
