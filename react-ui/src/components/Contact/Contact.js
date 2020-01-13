import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import PopoverContactPhone from "../PopoverContactPhone/PopoverContactPhone";

import "./Contact.css";

const Contact = ({ popoverContactPhone }) => {
  return (
    <div className="container container-reset-width">
      <div className="row">
        <div className="col-lg-6 text-white text-center p-5">
          <h1 className="text-peter-river">Get in touch with me</h1>

          <h3>I am currently available for hire.</h3>
          <p>
            So feel free to send me a message on social medias or via the
            contact form
          </p>
          <div className="brand-icons-contact">
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

            <span className="popover-contact px-1">
              <PopoverContactPhone />
            </span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="container py-5">
            <h1 className="text-emerald text-center pb-4">Contact Form</h1>
            <div className="row mx-auto">
              <div className="col-lg-12">
                <form id="contact-form" method="post" action="contact.php">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name *"
                      data-error="Full name is required."
                      required
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email *"
                      data-error="Valid email is required."
                      required
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control textarea-contact"
                      placeholder="Message for me *"
                      data-error="Please, leave us a message."
                      required
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      className="btn btn-success btn-send"
                      value="Send message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
