import React from "react";
import { Link } from "react-router-dom";
import ButtonMore from "../ButtonMore/ButtonMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import {
  faHandshake,
  faFile,
  faThumbsUp
} from "@fortawesome/free-regular-svg-icons";

import "./Home.css";

const Index = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8 text-center mx-auto">
            <section className="top-index">
              <h3 className="title-index animated fadeInDown">Hi!</h3>

              <h1 className="pb-3 text-reset">
                <span className="chevron">{`<`}</span>I am Benjamin Jaume
                <span className="chevron">{` />`}</span>
              </h1>

              <div className="pb-4">
                <div>
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
                </div>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="btn btn-warning button-hire-me px-4"
                >
                  Hire me{" "}
                  <span role="img" aria-label="Handshake">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      className="align-middle mr-1"
                    />
                  </span>
                </Link>
              </div>
            </section>

            <section className="pb-5">
              <hr id="discover-divider" className="mx-auto" />

              <div id="discover">
                <span className="discover-heading align-bottom">
                  Want to know more about me?{" "}
                </span>
                <span role="img" aria-label="Seek">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="align-text-middle ml-2"
                    size="2x"
                  />
                </span>
                <p className="lead pb-3">
                  This is where you can find information about me and what I do.
                  I write about the things I like and the tools I use at work or
                  in my day-to-day basis.
                </p>
                <ButtonMore page="about-me" />

                <hr id="discover-divider" className="mx-auto" />

                <span className="discover-heading align-bottom">
                  Discover my Portfolio{" "}
                </span>
                <span role="img" aria-label="Books">
                  <FontAwesomeIcon
                    icon={faList}
                    className="align-text-middle ml-2"
                    size="2x"
                  />
                </span>
                <p className="lead pb-3">
                  Since I have wrote my first line of code, I have created lots
                  of different websites, applications, projects and so forth.
                  You can find a list of all of them over there.
                </p>
                <ButtonMore page="portfolio" />

                <hr id="discover-divider" className="mx-auto" />

                <span className="discover-heading align-bottom">
                  Access my resume{" "}
                </span>
                <span role="img" aria-label="Parchment">
                  <FontAwesomeIcon
                    icon={faFile}
                    className="align-text-middle ml-2"
                    size="2x"
                  />
                </span>
                <p className="lead pb-3">
                  You can have a look at the live version of my resume. Although
                  it is possible to download a PDF version of it, whatever suits
                  you!
                </p>
                <ButtonMore page="resume" />

                <hr id="discover-divider" className="mx-auto" />

                <span className="discover-heading">
                  Let&apos;s keep in touch{" "}
                </span>
                <span role="img" aria-label="Thumbs Up">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="align-text-middle ml-2"
                    size="2x"
                  />
                </span>
                <p className="lead pb-3">
                  If you want to hire me, tell me about a mispelling mistake I
                  have made, giving me your feedback, or just say &quot;
                  <i>G&apos;day! </i>&quot;, please feel free to send me a
                  message! There is a form, but I am also active on social
                  medias
                </p>
                <ButtonMore page="contact" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
