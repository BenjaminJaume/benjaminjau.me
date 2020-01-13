import React, { Component, useEffect } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./PopoverContactPhone.css";

const phoneNumber = "+61432586316";

class PopoverContactPhone extends Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    return (
      <OverlayTrigger
        trigger="click"
        placement="top"
        rootClose
        overlay={
          <Popover id="popoverContactPhone">
            <Popover.Title as="h3">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" /> Contact Me
            </Popover.Title>
            <Popover.Content className="text-center">
              {this.state.copied ? (
                <span className="text-emerald">Copied!</span>
              ) : (
                <span>Open WhatsApp or copy</span>
              )}
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=61432586316"
                target="_blank"
                rel="noopener noreferrer"
                title="Open link with WhatsApp"
              >
                +61 4 32 586 316
              </a>
              <span> or </span>
              <CopyToClipboard
                text={phoneNumber}
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
    );
  }
}

export default PopoverContactPhone;
