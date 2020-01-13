import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Page404 = () => {
  return (
    <>
      <div className="container py-5 text-center text-white">
        <h1 className="display-4 text-white">
          <span className="text-red-pigment">404: </span>
          Page not found
        </h1>

        <p className="lead">There but be a mistake...</p>
        <Link to="/" className="btn btn-danger px-4">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="align-middle mr-2"
          />
          Go back to the home page
        </Link>
      </div>
    </>
  );
};

export default Page404;
