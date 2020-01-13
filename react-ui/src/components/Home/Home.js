import React from "react";
import { Link } from "react-router-dom";
import ButtonMore from "../ButtonMore/ButtonMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faList,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faFile,
  faThumbsUp,
  faClock
} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Home.css";
import importantProjects from "./importantProjects.json";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-white text-center">
            <section>
              <div className="pt-5 mb-3">
                <h1 className="display-4 text-monospace animated slideInRight">
                  Hi! I am
                  <br />
                  <span className="text-red-pigment">{"<"}</span>Benjamin Jaume
                  <span className="text-red-pigment">{" />"}</span>
                </h1>
              </div>

              <div className="mb-4">
                {/* <div>
                  <h3 className="title-description">Front-End Developer</h3>
                  <p>Specialised in React with NodeJS and Express</p>
                </div>
                <div>
                  <h4 className="title-description">Traveller</h4>
                  <p>Fascinated by visiting amazing places in the world</p>
                </div>
                <div>
                  <h4 className="title-description">Investigator</h4>
                  Interested in mindfulness and self-development
                </div> */}
                <h1 className="text-sun-flower mb-0"># Web Developer #</h1>
                <h4>
                  I build websites with NodeJS, React and Express hosted on
                  Heroku
                </h4>
              </div>

              <div className="mb-3">
                <Link
                  to="/contact"
                  className="btn btn-warning button-hire-me px-4"
                >
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="align-middle mr-2"
                  />
                  Hire me
                </Link>
              </div>
            </section>

            <section>
              <hr id="discover-divider" className="mx-auto" />

              <div>
                {/* START CARD-DECK */}
                <h3 className="text-emerald text-center mb-4">
                  # A few websites I worked on #
                </h3>
                <div className="card-deck">
                  {importantProjects.map((project, i) => {
                    return (
                      <div key={i} className="card">
                        {/* NEW CARD */}
                        <div className="card-body text-white bg-dark">
                          <h5 className="text-center text-emerald font-weight-bold">
                            {project.name}
                          </h5>
                          <p className="card-text text-center">
                            {project.description}
                          </p>
                          <div className="d-flex justify-content-around align-items-center flex-wrap">
                            {project.tools.map((tool, i) => {
                              return (
                                <div key={i} className="icon-portfolio">
                                  <img
                                    src={`./images/tools/${tool
                                      .replace(" ", "-")
                                      .toLowerCase()}.png`}
                                    alt={"Logo "}
                                  />
                                  <span className="align-text-top pl-1">
                                    {tool}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="card-footer bg-light">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              {project.github !== "" ? (
                                <a
                                  href={`${project.github}/blob/master/README.md`}
                                  className="btn btn-sm btn-outline-success"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  More
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled text-disabled">
                                  More
                                </a>
                                /* eslint-enable */
                              )}

                              {project.github !== "" ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-success"
                                >
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled">
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                                /* eslint-enable */
                              )}
                              {project.link !== "" ? (
                                <a
                                  className="btn btn-sm btn-outline-success"
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                              ) : (
                                /* eslint-disable */
                                <a className="btn btn-sm btn-outline-success disabled">
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                                /* eslint-enable */
                              )}
                            </div>

                            <small className="text-muted">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-1"
                              />
                              {project.date.substring(0, 4)}
                            </small>
                          </div>
                        </div>
                        {/* END CARD */}
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr id="discover-divider" className="mx-auto" />
            </section>
          </div>
        </div>
      </div>

      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white text-center pb-4">
              <FontAwesomeIcon icon={faSearch} className="mr-3" size="2x" />
              <span className="discover-heading">
                Want to know more about me?{" "}
              </span>
              <p className="lead text-white pb-3">
                This is where you can find information about me and what I do. I
                write about the things I like and the tools I use at work or in
                my day-to-day basis.
              </p>
              <ButtonMore page="about-me" />
            </div>
            <div className="col-lg-6 text-white text-center pb-4">
              <FontAwesomeIcon icon={faList} className="mr-3" size="2x" />
              <span className="discover-heading">Discover my Portfolio </span>
              <p className="lead text-white pb-3">
                Since I have wrote my first line of code, I have created lots of
                different websites, applications, projects and so forth. You can
                find a list of all of them over there.
              </p>
              <ButtonMore page="portfolio" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white text-center pb-4">
              <FontAwesomeIcon icon={faFile} className="mr-3" size="2x" />
              <span className="discover-heading">Access my resume </span>
              <p className="lead text-white pb-3">
                You can have a look at the live version of my resume. Although
                it is possible to download a PDF version of it, whatever suits
                you!
              </p>
              <ButtonMore page="resume" />
            </div>
            <div className="col-lg-6 text-white text-center pb-4">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-3" size="2x" />
              <span className="discover-heading">
                Let&apos;s keep in touch{" "}
              </span>
              <p className="lead text-white pb-3">
                If you want to hire me, tell me about a mispelling mistake I
                have made, giving me your feedback, or just say &quot;
                <i>G&apos;day! </i>&quot;, please feel free to send me a
                message! There is a form, but I am also active on social medias
              </p>
              <ButtonMore page="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
