import React, { Component } from "react";
import "./App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://benjaminjaume-api.herokuapp.com/api.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.state.data.map((item, i) => {
            return (
              <div key={i}>
                <ul>
                  <li>ID: {item.id}</li>
                  <li>Name: {item.name}</li>
                  <li>Description: {item.description}</li>
                  <li>Languages: {item.languages}</li>
                  <li>Github: {item.name}</li>
                  <li>
                    Link:{" "}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        INDEX PAGE
        <Footer />
      </div>
    );
  }
}

export default App;
