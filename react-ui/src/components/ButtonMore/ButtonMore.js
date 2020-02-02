import React from "react";
import { withNamespaces } from "react-i18next";

// Modules import
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const ButtonMore = ({ page, t }) => {
  return (
    <LinkContainer to={`/${page}#`} className="btn btn-success" exact>
      <span className="h4 mb-0">
        <span>{t("navbar.btnMoreText")}</span>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="align-middle ml-2"
        />
      </span>
    </LinkContainer>
  );
};

// @ts-ignore
export default withNamespaces()(ButtonMore);
