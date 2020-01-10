import React from "react";
import { Link } from "react-router-dom";

const ButtonMore = ({ page }) => {
  return (
    <Link to={`/${page}#`} className="btn btn-success">
      Learn more
      <i className="fas fa-arrow-right ml-1"></i>
    </Link>
  );
};

export default ButtonMore;
