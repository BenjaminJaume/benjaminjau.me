import React from "react";
import { withNamespaces } from "react-i18next";
import { IndexLinkContainer } from "react-router-bootstrap";
import "./NavigationBar.css";
import ButtonResume from "../ButtonResume/ButtonResume";
import DropdownLanguage from "../DropdownLanguage/DropdownLanguage";

const NavigationBar = ({ onClick, lg, t }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <IndexLinkContainer
        to="/"
        href="/"
        className="navbar-brand"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <span>
          <img
            src="./images/favicon/benjaminjaume-logo.png"
            alt="Benjamin Jaume"
            className="d-inline-block align-top mr-2"
            width="30"
            height="30"
          />
          Benjamin Jaume
        </span>
      </IndexLinkContainer>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
        aria-controls="navigation-bar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navigation-bar" className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <IndexLinkContainer
              to="/"
              href="/"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span>{t("navbar.home")}</span>
            </IndexLinkContainer>
          </li>
          <li className="nav-item">
            <IndexLinkContainer
              to="/portfolio"
              href="/portfolio"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span>{t("navbar.portfolio")}</span>
            </IndexLinkContainer>
          </li>
          <li className="nav-item">
            <IndexLinkContainer
              to="/resume"
              href="/resume"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span>{t("navbar.resume")}</span>
            </IndexLinkContainer>
          </li>
          <li className="nav-item">
            <IndexLinkContainer
              to="/about-me"
              href="/about-me"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span>{t("navbar.aboutMe")}</span>
            </IndexLinkContainer>
          </li>
          <li className="nav-item">
            <IndexLinkContainer
              to="/contact"
              href="/contact"
              className="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <span>{t("navbar.contact")}</span>
            </IndexLinkContainer>
          </li>

          {/* <DropdownLanguage onClick={onClick} lg={lg} /> */}
        </ul>
        <div className="d-flex justify-content-center m-2">
          <ButtonResume displayMessage={t("navbar.resume")} />
        </div>
      </div>
    </nav>
  );
};

// @ts-ignore
export default withNamespaces()(NavigationBar);
