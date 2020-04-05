import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ButtonResume = ({ displayMessage, lg }) => {
  let file = "";

  switch (lg) {
    case "fr":
      file = "Benjamin Jaume - CV.pdf";
      break;

    case "en":
      file = "Benjamin Jaume - Résumé.pdf";
      break;

    default:
      file = "Benjamin Jaume - Résumé.pdf";
      break;
  }

  return (
    <div>
      <a
        href={`./documents/${file}`}
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
