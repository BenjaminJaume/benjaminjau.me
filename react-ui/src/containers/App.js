import React from "react";
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

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
};

export default App;
