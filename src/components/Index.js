import React from "react";

const Index = () => {
  return (
    <>
      <section>
        <div className="d-flex flex-column main-text justify-content-center align-items-center pt-5">
          <h3 className="title-index animated fadeInDown">Hi!</h3>
          <h2>I&apos;m Benjamin Jaume</h2>
          <h4>Front-End Developer</h4>
          <div className="py-4">
            <button
              id="take-tour-button"
              className="btn btn-outline-light btn-lg tour-button"
            >
              Take a tour
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div id="discover">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <h3 className="discover-heading">
                Want to know more about me?{" "}
                <span role="img" aria-label="Face With Monocle">
                  🧐
                </span>
              </h3>
              <p className="lead">
                Whether you are an employer, a family member, a friend or just a
                random person lost on the internet, this is for you. If you are
                actually interested in me, let me tell you my story
              </p>
              <a href="./about-me" className="btn btn-outline-success btn-more">
                {/* <i className="fas fa-plus pr-2"></i> */}
                More
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          <hr id="discover-divider" className="mx-auto" />

          <div className="row">
            <div className="col-md-7 mx-auto">
              <h3 className="discover-heading">
                Discover my Portfolio{" "}
                <span role="img" aria-label="Books">
                  📚
                </span>
              </h3>
              <p className="lead">
                Since I&apos;ve wrote my first line of code, I have created lots
                of different websites, applications and projects. There is a
                list of all of them you can find on this page
              </p>
              <a
                href="./portfolio"
                className="btn btn-outline-success btn-more"
              >
                More
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          <hr id="discover-divider" className="mx-auto" />

          <div className="row">
            <div className="col-md-7 mx-auto">
              <h3 className="discover-heading">
                Access my resume{" "}
                <span role="img" aria-label="Parchment">
                  📜
                </span>
              </h3>
              <p className="lead">
                You have the choice to download a PDF version of my resume, or
                just having a quick look at it on my website by clicking here
              </p>
              <a href="./resume" className="btn btn-outline-success btn-more">
                More
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          <hr id="discover-divider" className="mx-auto" />

          <div className="row">
            <div className="col-md-7 mx-auto">
              <h3 className="discover-heading">
                Let&apos;s keep in touch{" "}
                <span role="img" aria-label="Thumbs Up">
                  👍
                </span>
              </h3>
              <p className="lead">
                Fell free to send me a message if you want to contact me
              </p>
              <a href="./contact" className="btn btn-outline-success btn-more">
                More
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
