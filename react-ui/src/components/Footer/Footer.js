import React from "react";
import { withNamespaces } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faCopyright
} from "@fortawesome/free-regular-svg-icons";
import ContactItems from "../ContactItems/ContactItems";

import "./Footer.css";

const Footer = ({ phoneNumber, t }) => {
  return (
    <>
      <footer id="footer" className="bg-light pt-5 pb-1">
        <p className="d-inline-flex">
          {t("footer.msgTopOne")}
          <span className="heartBeatEffect mx-2">
            <FontAwesomeIcon icon={faHeart} className="text-red-pigment" />{" "}
          </span>
          {t("footer.msgTopTwo")} Benjamin Jaume
        </p>

        <div className="mb-3">
          <ContactItems phoneNumber={phoneNumber} />
        </div>

        <div className="mb-5">
          {/* eslint-disable */}
          <a
            id="back-top-button"
            className="btn btn-warning"
            href="#"
            role="button"
          >
            <span>{t("footer.topButtonText")}</span>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="ml-2" />
          </a>
          {/* eslint-enable */}
        </div>

        <p className="text-muted">
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          Benjamin Jaume
        </p>
      </footer>
    </>
  );
};

// @ts-ignore
export default withNamespaces()(Footer);
