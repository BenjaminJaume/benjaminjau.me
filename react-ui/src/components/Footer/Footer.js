import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import PopoverContactPhone from "../PopoverContactPhone/PopoverContactPhone";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" className="bg-light p-5">
          <p id="message-bottom">
            Created with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "var(--red-pigment)" }}
            />{" "}
            by Benjamin Jaume
          </p>

          <div className="pb-3">
            <a
              href="https://www.linkedin.com/in/benjamin-jaume/"
              className="linkedin-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://github.com/BenjaminJaume"
              className="github-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>

            <a
              href="https://www.facebook.com/ben.jaume"
              className="facebook-icon px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            <span className="popover-footer px-1">
              <PopoverContactPhone />
            </span>
          </div>

          <div>
            {/* eslint-disable */}
            <a
              id="back-top-button"
              className="btn btn-warning"
              href="#"
              role="button"
            >
              TOP
              <FontAwesomeIcon icon={faArrowAltCircleUp} className="ml-2" />
            </a>
            {/* eslint-enable */}
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
