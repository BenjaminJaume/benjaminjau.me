import React from "react";
import { SaveAlt } from "@material-ui/icons";

const ButtonResume = ({ displayMessage }) => {
  return (
    <div>
      <a
        href="./documents/Benjamin Jaume - Resume.pdf"
        className="btn btn-success font-weight-bold px-3"
        download
      >
        <SaveAlt className="align-bottom mr-1" />
        {displayMessage}
      </a>
    </div>
  );
};

export default ButtonResume;
