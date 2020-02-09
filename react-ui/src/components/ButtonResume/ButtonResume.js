import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ButtonResume = ({ displayMessage }) => {
  return (
    <div>
      <a
        href="./documents/Benjamin Jaume - Résumé.pdf"
        className="btn btn-success font-weight-bold px-3"
        download
      >
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        {displayMessage}
      </a>
    </div>
  );
};

export default ButtonResume;
