import React from "react";

// Modules import
import { withNamespaces } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";
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

// Custom components import
import ButtonMore from "../../components/ButtonMore/ButtonMore";

// JSON File
// @ts-ignore
import importantProjects from "./importantProjects.json";

// CSS import
import "./Home.css";

const Home = ({ t }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="text-center text-white ">
              <div className="pt-5 mb-3">
                <h1 className="display-4 text-monospace animated slideInRight">
                  <span>{t("home.hi")}</span>
                  <br />
                  <span className="text-red-pigment">{"<"}</span>Benjamin Jaume
                  <span className="text-red-pigment">{" />"}</span>
                </h1>
              </div>

              <div className="mb-4">
                <h1 className="text-sun-flower">
                  # <span>{t("home.webDev")}</span> #
                </h1>
                <h4>
                  <span>{t("home.shortMsg")}</span>
                </h4>
              </div>

              <div className="btn btn-warning mb-3">
                <LinkContainer to="/contact" className="px-2">
                  <span className="h4 mb-0">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="align-middle mr-2"
                    />
                    <span>{t("home.hireMe")}</span>
                  </span>
                </LinkContainer>
              </div>
            </section>

            <section>
              <hr className="divider mx-auto" />

              <div>
                {/* START CARD-DECK */}
                <h3 className="text-emerald text-center mb-4">
                  # <span>{t("home.textProjects")}</span> #
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
              <hr className="divider mx-auto" />
            </section>
          </div>
        </div>
      </div>

      <section className="container mb-5">
        <div className="row">
          <div className="col-lg-6 text-white text-center pb-4">
            <FontAwesomeIcon icon={faSearch} className="mr-3" size="2x" />
            <span className="discover-heading">
              <span>{t("home.aboutMe.title")}</span>{" "}
            </span>
            <p className="lead text-white pb-3">
              <span>{t("home.aboutMe.content")}</span>
            </p>
            <ButtonMore page="about-me" />
          </div>
          <div className="col-lg-6 text-white text-center pb-4">
            <FontAwesomeIcon icon={faList} className="mr-3" size="2x" />
            <span className="discover-heading">
              <span>{t("home.portfolio.title")}</span>
            </span>
            <p className="lead text-white pb-3">
              <span>{t("home.portfolio.content")}</span>
            </p>
            <ButtonMore page="portfolio" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-white text-center pb-4">
            <FontAwesomeIcon icon={faFile} className="mr-3" size="2x" />
            <span className="discover-heading">
              <span>{t("home.resume.title")}</span>
            </span>
            <p className="lead text-white pb-3">
              <span>{t("home.resume.content")}</span>
            </p>
            <ButtonMore page="resume" />
          </div>
          <div className="col-lg-6 text-white text-center pb-4">
            <FontAwesomeIcon icon={faThumbsUp} className="mr-3" size="2x" />
            <span className="discover-heading">
              <span>{t("home.contact.title")}</span>
            </span>
            <p className="lead text-white pb-3">
              <span>{t("home.contact.content")}</span>

              {/* If you want to hire me, tell me about a mispelling mistake I have
              made, giving me your feedback, or just say &quot;
              <i>G&apos;day! </i>&quot;, please feel free to send me a message!
              There is a form, but I am also active on social medias */}
            </p>
            <ButtonMore page="contact" />
          </div>
        </div>
      </section>
    </>
  );
};

// @ts-ignore
export default withNamespaces()(Home);
