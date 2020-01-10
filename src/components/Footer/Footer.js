import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" className="bg-light p-5">
          <p id="message-bottom">
            Created with{" "}
            <span role="img" aria-label="Love">
              ❤
            </span>{" "}
            by Benjamin Jaume
          </p>

          <div className="pb-3">
            <a
              href="https://www.linkedin.com/in/benjamin-jaume/"
              className="linkedin-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/BenjaminJaume"
              className="github-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>

            <a
              href="https://www.facebook.com/ben.jaume"
              className="facebook-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>

            {/* eslint-disable */}
            <a
              tabIndex="0"
              className="whatsapp-icon px-1"
              role="button"
              data-trigger="focus"
              data-toggle="popover"
              data-placement="top"
              title="✉ Message me"
              data-content="<a href='https://api.whatsapp.com/send?phone=61432586316' target='_blank'>+61 4 32 586 316</a>"
              data-html="true"
            >
              <i className="fab fa-whatsapp-square"></i>
            </a>
            {/* eslint-enable */}
          </div>

          <div>
            {/* eslint-disable */}
            <a
              id="back-top-button"
              className="btn btn-outline-success"
              href="#"
              role="button"
            >
              TOP
              <span className="ml-2" role="img" aria-label="Top">
                ☝
              </span>
            </a>
            {/* eslint-enable */}
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
