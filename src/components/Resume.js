import React from "react";

const Resume = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Resume</h1>
          <p className="lead">This is the resume section</p>
          <p>
            If I do it well, you will be able to see my interactive resume on
            this page. The elements are going to appear one at the time while
            you&apos;re scrolling
          </p>
        </div>
      </div>

      <div className="container py-5 text-center">
        <img
          src="https://clipground.com/images/traffic-cone-clipart-20.jpg"
          alt="Under construction"
          width="30%"
          className="img-fluid"
        />
        <h3 style={{ color: "white" }}>This page is under construction</h3>
      </div>
    </>
  );
};

export default Resume;
