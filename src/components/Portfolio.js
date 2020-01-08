import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://benjaminjaume-api.herokuapp.com/api.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
    // .catch(err => console.log(err));
  }
  render() {
    const { data } = this.state;

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
            <p>
              It all started in 2010, do you
              <a href="about-me#first-event"> remember</a> ?
            </p>
          </div>
        </div>

        <div className="text-center text-white mt-3">
          <h1>Total projects:</h1>
          <h3>17</h3>
        </div>

        {/* START CARD-DECK */}
        <div className="card-deck my-5 mx-3">
          {/* NEW CARD */}
          {data ? (
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
                      <div className="icon-portfolio font-weight-bold">
                        <img
                          src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"
                          alt="Logo Javascript"
                        />
                        <span className="align-text-top">Javascript</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href={`${item.github}/blob/master/README.md`}
                          className="btn btn-sm btn-outline-success"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          More
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-success"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          className="btn btn-sm btn-outline-success"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>

                      <small className="text-muted">
                        <i className="far fa-clock mr-1"></i>
                        {item.date}
                      </small>
                    </div>
                  </div>
                  {/* END CARD */}
                </div>
              );
            })
          ) : (
            <div style={{ color: "white" }}>
              Loading. Data= <h1>{data}</h1>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Portfolio;
