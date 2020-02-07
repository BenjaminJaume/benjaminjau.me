import React from "react";
import { Link } from "react-router-dom";
import { HollowDotsSpinner } from "react-epic-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./Portfolio.css";

const Portfolio = props => {
  const { projects, isLoading, error } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <section className="text-white text-center pt-5">
            <h1 className="display-4">Portfolio</h1>
            <p className="lead">
              You can find here all the projects I have been doing in Computer
              Science since I started programming
            </p>
          </section>
        </div>

        <div className="col-12">
          {isLoading ? (
            <div className="text-white text-center mx-auto mb-5">
              <h2 className="loading-text font-weight-bold text-sun-flower mb-5">
                Loading ...
              </h2>
              <HollowDotsSpinner color="white" size={35} className="mx-auto" />
            </div>
          ) : (
            ""
          )}
          {error ? (
            <div className="mx-auto text-white text-center my-5">
              <h3>Sorry for the inconvenience, but an error has occured.</h3>
              <h3>
                Please let me know about this by{" "}
                <Link to="/contact" className="link-contact-me">
                  contacting me
                </Link>
                .
              </h3>
            </div>
          ) : (
            /* START CARD-DECK */
            <div className="card-deck my-5">
              {projects.map((project, i) => {
                return (
                  <div key={i} className="card">
                    {/* NEW CARD */}
                    <div className="card-body text-white">
                      <h5 className="text-center text-white font-weight-bold">
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
                          <FontAwesomeIcon icon={faClock} className="mr-1" />
                          {project.date.substring(0, 4)}
                        </small>
                      </div>
                    </div>
                    {/* END CARD */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
