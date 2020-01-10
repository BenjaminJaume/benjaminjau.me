import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BreedingRhombusSpinner } from "react-epic-spinners";

import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }
  componentDidMount() {
    // const { data } = this.state;

    this.setState({ isLoading: true });

    // if (data === []) {
    fetch("https://benjaminjaume-api.herokuapp.com/api.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then(response =>
        this.setState({
          data: response,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
    // }
  }
  render() {
    const { data, isLoading, error } = this.state;

    return (
      <>
        <div className="jumbotron jumbotron-fluid mb-0">
          <div className="container">
            <h1 className="display-4 text-center">Portfolio</h1>
            <p className="lead text-center">
              All my projects since the beggining
            </p>
            <p>
              You can find in this section all the projects I have been doing in
              Computer Science since I started programming
            </p>
            <p>It all started in 2010.</p>
          </div>
        </div>

        {/* START CARD-DECK */}
        <div className="card-deck my-5 mx-3">
          {/* NEW CARD */}
          {error ? (
            <div className="mx-auto text-center" style={{ color: "white" }}>
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
            ""
          )}
          {isLoading ? (
            <div className="mx-auto mb-5">
              <h2 className="loading-text text-center pb-5">Loading ...</h2>
              <BreedingRhombusSpinner size={200} color="white" />
            </div>
          ) : (
            data.map((item, i) => {
              return (
                <div key={i} className="card">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.name}</h5>
                    <p className="card-text text-center">{item.description}</p>
                    <div className="d-flex justify-content-around flex-wrap">
                      {item.languages.map((language, i) => {
                        return (
                          <div
                            key={i}
                            className="icon-portfolio font-weight-bold"
                          >
                            <img
                              src={`./images/languages/${language
                                .replace(" ", "-")
                                .toLowerCase()}.png`}
                              alt={`Logo ${language}`}
                            />
                            <span className="align-text-top pl-1">
                              {language}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        {item.github !== "" ? (
                          <a
                            href={`${item.github}/blob/master/README.md`}
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

                        {item.github !== "" ? (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-success"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        ) : (
                          /* eslint-disable */
                          <a className="btn btn-sm btn-outline-success disabled">
                            <i className="fab fa-github"></i>
                          </a>
                          /* eslint-enable */
                        )}
                        {item.link !== "" ? (
                          <a
                            className="btn btn-sm btn-outline-success"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        ) : (
                          /* eslint-disable */
                          <a className="btn btn-sm btn-outline-success disabled">
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                          /* eslint-enable */
                        )}
                      </div>

                      <small className="text-muted">
                        <i className="far fa-clock mr-1"></i>
                        {item.date.substring(0, 4)}
                      </small>
                    </div>
                  </div>
                  {/* END CARD */}
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
}

export default Portfolio;
