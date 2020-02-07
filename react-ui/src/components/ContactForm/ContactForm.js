import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isSent: false,
      status: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    var { name, email, message, isSent, status } = this.state;

    return (
      <>
        {isSent && status === "success" ? (
          <div className="text-center">
            <span className="text-emerald h6">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              Successfully sent, thank you!
              <br />I will reply shortly
            </span>
          </div>
        ) : (
          ""
        )}
        {isSent && status !== "success" ? (
          <div className="">
            <span className="text-danger text-center h6">
              <FontAwesomeIcon icon={faTimes} className="mr-2" />
              Sorry, an error occured
            </span>
            <br />
            Please send me an{" "}
            <a href="mailto:benjamin.jaume@gmail.com" className="link-emerald">
              email
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="mt-3">
          <form className="test-mailing">
            <div className="form-group">
              <input
                id="form-name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Name*"
                data-error="A name is required"
                onChange={this.handleNameChange}
                value={name}
                required
              />
            </div>
            <div className="form-group">
              <input
                id="form_email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Email*"
                data-error="Valid email is required"
                onChange={this.handleEmailChange}
                value={email}
                required
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <textarea
                id="form_message"
                name="message"
                className="form-control textarea-contact"
                placeholder="Message*"
                data-error="Please, leave a message"
                onChange={this.handleMessageChange}
                value={message}
                required
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <div className="text-center">
              <button
                type="button"
                value="Submit"
                className="btn btn-success mx-2"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "new_message_template";

    this.sendMessage(templateId, {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    });
  }

  sendMessage(templateId, variables) {
    // @ts-ignore
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        this.setState({
          isSent: true,
          status: "success"
        });
      })
      .catch(err => this.setState({ isSent: true, status: `Error: ${err}` }));
  }
}

export default ContactForm;
