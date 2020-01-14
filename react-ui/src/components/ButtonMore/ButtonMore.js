import React from "react";

// Modules import
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const ButtonMore = ({ page }) => {
  return (
    <LinkContainer to={`/${page}#`} className="btn btn-success" exact>
      <span className="h4 mb-0">
        Learn more
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="align-middle ml-2"
        />
      </span>
    </LinkContainer>
  );
};

export default ButtonMore;
