import React from "react";

const Index = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-column main-text justify-content-center align-items-center">
          <h3 className="title-index animated fadeInDown">Hi!</h3>
          <h4>I'm Benjamin Jaume</h4>
          <h5>Front-End Developer</h5>

          <img
            src="./images/benjaminjaume.jpg"
            alt=""
            className="picture-of-me py-4"
          />

          <a
            href="#discover"
            id="take-tour-button"
            className="btn btn-outline-light btn-lg tour-button"
          >
            Take a tour
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <section className="container py-5">
        <div id="discover">
          <div className="row">
            <div className="col-md-7">
              <h2 id="discover-heading">Want to know more about me? 🧐</h2>
              <p className="lead">
                Whether you are an employer, a family member, a friend or just a
                random person lost on the internet, this is for you. If you are
                actually interested in me, let me tell you my story
              </p>
              <a
                href="./about-me.html"
                className="btn btn-outline-success btn-more"
              >
                <i className="fas fa-plus pr-2"></i>
                More
              </a>
              <div id="result" style={{ fontSize: "xx-large" }}>
                ZERO
              </div>
            </div>
            <div className="col-md-5">
              <a href="./about-me.html">
                <img
                  src="./images/about-me-square.jpg"
                  alt="About me"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <hr id="discover-divider" />

          <div className="row">
            <div className="col-md-7 order-md-2">
              <h2 className="discover-heading">Discover my Portfolio 📚</h2>
              <p className="lead">
                Since I've wrote my first line of code, I have created lots of
                different websites, applications and projects. There is a list
                of all of them you can find on this page
              </p>
              <a
                href="./portfolio.html"
                className="btn btn-outline-success btn-more"
              >
                <i className="fas fa-plus pr-2"></i>
                More
              </a>
            </div>
            <div className="col-md-5 order-md-1">
              <a href="./portfolio.html">
                <img
                  src="./images/portfolio-square.jpg"
                  alt="Portfolio"
                  className=" img-fluid"
                />
              </a>
            </div>
          </div>

          <hr id="discover-divider" />

          <div className="row">
            <div className="col-md-7">
              <h2 className="discover-heading">Access my resume 📜</h2>
              <p className="lead">
                You have the choice to download a PDF version of my resume, or
                just having a quick look at it on my website by clicking here
              </p>
              <a
                href="./resume.html"
                className="btn btn-outline-success btn-more"
              >
                <i className="fas fa-plus pr-2"></i>
                More
              </a>
            </div>
            <div className="col-md-5">
              <a href="./resume.html">
                <img
                  src="./images/resume-square.jpg"
                  alt="Resume"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <hr id="discover-divider" />

          <div className="row">
            <div className="col-md-7 order-md-2">
              <h2 className="discover-heading">Let's keep in touch 👍</h2>
              <p className="lead">
                Fell free to send me a message if you want to contact me
              </p>
              <a
                href="./contact.html"
                className="btn btn-outline-success btn-more"
              >
                <i className="fas fa-plus pr-2"></i>
                More
              </a>
            </div>
            <div className="col-md-5 order-md-1">
              <a href="./contact.html">
                <img
                  src="./images/contact-square.jpg"
                  alt="Contact"
                  className=" img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
