import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faWhatsappSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

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
              <FontAwesomeIcon icon={faWhatsappSquare} />
            </a>
            {/* eslint-enable */}
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
