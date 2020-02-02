import React, { Component } from "react";
import i18n from "../i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import Home from "../containers/Home/Home";
import AboutMe from "../containers/AboutMe/AboutMe";
import Portfolio from "../containers/Portfolio/Portfolio";
import Resume from "../containers/Resume/Resume";
import Contact from "../containers/Contact/Contact";
import page404 from "../containers/Page404/Page404";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// import "bootstrap/dist/css/bootstrap.min.css";

const phoneNumber = "+61 4 32 586 316";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lg: "en"
    };
  }

  changeLanguage = lg => {
    i18n.changeLanguage(lg);
    this.setState({
      lg
    });
  };

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navbar onClick={this.changeLanguage} lg={this.state.lg} />

        <Switch>
          <Route path="/about-me" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
          <Route path="/resume" component={Resume}>
            <Resume phoneNumber={phoneNumber} />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact phoneNumber={phoneNumber} />
          </Route>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route component={page404} />
        </Switch>

        <Footer phoneNumber={phoneNumber} />
      </Router>
    );
  }
}
