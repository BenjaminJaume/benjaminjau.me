import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faWhatsappSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ContactItems.css";

class ContactItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      copied: false
    };
  }

  render() {
    return (
      <>
        <a
          href="https://urlgeni.us/linkedin/GTEH"
          className="linkedin-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/BenjaminJaume"
          className="github-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>

        <a
          href="https://urlgeni.us/facebook/EPhx"
          className="facebook-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>

        <span className="whatsapp-brand-icon px-1">
          <OverlayTrigger
            trigger="click"
            placement="top"
            rootClose
            overlay={
              <Popover id="popoverContactPhone">
                <Popover.Title as="h3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" /> Contact
                  Me
                </Popover.Title>
                <Popover.Content className="text-center">
                  {this.state.copied ? (
                    <span className="text-emerald">Copied!</span>
                  ) : (
                    <span>Open WhatsApp or copy</span>
                  )}
                  <br />
                  <a
                    href={`https://api.whatsapp.com/send?phone=${this.props.phoneNumber
                      .replace("+", "")
                      .replace(/ /g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open link with WhatsApp"
                  >
                    {this.props.phoneNumber}
                  </a>
                  <span> or </span>
                  <CopyToClipboard
                    text={this.props.phoneNumber.replace(/ /g, "")}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faClipboard}
                        className="clipboard-icon text-good-night"
                        title="Copy phone number"
                      />
                    </span>
                  </CopyToClipboard>
                  <br />
                </Popover.Content>
              </Popover>
            }
          >
            <FontAwesomeIcon icon={faWhatsappSquare} />
          </OverlayTrigger>
        </span>

        <a
          href="mailto:benjamin.jaume@gmail.com"
          className="mail-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>

        <a
          href="https://urlgeni.us/youtube/channel/bPwj"
          className="youtube-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>

        <a
          href="https://www.dailymotion.com/dm_fe8eec2a259fade493b8a23b2a7abc72"
          className="dailymotion-brand-icon px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </a>
      </>
    );
  }
}

export default ContactItems;
