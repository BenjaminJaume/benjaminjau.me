import React from "react";
import ContactItems from "../ContactItems/ContactItems";
import ContactForm from "../ContactForm/ContactForm";

import "./Contact.css";

const Contact = ({ phoneNumber }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 text-white text-center p-5">
          <h1 className="text-peter-river">Get in touch with me</h1>

          <h3>I am currently available for hire.</h3>
          <p>
            So feel free to send me a message on social medias or via the
            contact form
          </p>
          <div className="brand-icons-contact">
            <ContactItems phoneNumber={phoneNumber} />
          </div>
        </div>

        <div className="col-lg-5 col-sm-8 mx-auto p-5">
          <h1 className="text-emerald text-center">Contact Form</h1>
          {/* <form id="contact-form" method="post" action="contact.php">
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
          </form> */}

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
