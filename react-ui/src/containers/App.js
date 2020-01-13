import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";
import page404 from "../components/Page404/Page404";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// import "bootstrap/dist/css/bootstrap.min.css";

const phoneNumber = "+61 4 32 586 316";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    // const { projects } = this.state;

    this.setState({ isLoading: true });

    // if (projects === []) {
    // fetch("http://localhost:5000/projects.json")
    fetch("https://benjaminjaume.herokuapp.com/projects.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then(response =>
        this.setState({
          projects: response,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
    // }
  }
  render() {
    return (
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-me" exact component={AboutMe}>
            <ScrollToTop />
            <AboutMe />
          </Route>
          <Route path="/portfolio" exact component={Portfolio}>
            <ScrollToTop />
            <Portfolio />
          </Route>
          <Route path="/resume" exact component={Resume}>
            <ScrollToTop />
            <Resume phoneNumber={phoneNumber} />
          </Route>
          <Route path="/contact" exact component={Contact}>
            <ScrollToTop />
            <Contact phoneNumber={phoneNumber} />
          </Route>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route component={page404} />
        </Switch>

        <Footer phoneNumber={phoneNumber} />
      </Router>
    );
  }
}

export default App;
