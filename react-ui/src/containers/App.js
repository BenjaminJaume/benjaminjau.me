import React from "react";
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
