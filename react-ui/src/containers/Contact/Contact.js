import React from "react";
import ContactItems from "../../components/ContactItems/ContactItems";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";

const Contact = ({ phoneNumber }) => {
  return (
    <div className="container-fluid container-contact">
      <div className="row h-100 align-items-center">
        <div className="col-12 col-lg-6 text-white text-center">
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

        <div className="col-12 col-lg-5 col-sm-8 mx-auto">
          <h1 className="text-emerald text-center">Contact Form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
