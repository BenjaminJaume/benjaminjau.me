import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faHome,
  faSchool,
  faLongArrowAltRight,
  faGlobe,
  faPhoneAlt,
  faCogs,
  faFolderOpen,
  faGraduationCap,
  faBriefcase,
  // faMedal,
  faPlus,
  faPlaneDeparture,
  faTools,
  faMusic,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import ContactItems from "../../components/ContactItems/ContactItems";
import ButtonResume from "../../components/ButtonResume/ButtonResume";

import "./Resume.css";

const Resume = ({ phoneNumber }) => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="text-center text-white">
              <h1 className="display-4">Resume</h1>
              <p className="lead mb-0">Oh, you are here! Interested?</p>
              <p className="lead">
                Then download the PDF or have a quicker look below
              </p>

              <ButtonResume displayMessage="Download PDF" />
            </div>
          </div>

          <hr className="divider mx-auto" />

          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-md-8 col-12 mx-auto">
                <div className="text-white">
                  <div className="item-resume rounded text-center mb-2 p-3">
                    <div className="mb-3">
                      <h1>Benjamin Jaume</h1>
                      <h3 className="font-courrierNew"># Web Developer #</h3>
                      <div className="mb-2">
                        <h4>
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="mr-2"
                          />
                          Playa Sámara, Costa Rica
                        </h4>

                        <h4>
                          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                          <a
                            href="tel:+50687907001"
                            className="link-sun-flower"
                          >
                            +506 8790 7001
                          </a>
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                          <a
                            href={`https://api.whatsapp.com/send?phone=${phoneNumber
                              .replace("+", "")
                              .replace(/ /g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open link with WhatsApp"
                            className="link-sun-flower"
                          >
                            {phoneNumber}
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="brand-icons-contact">
                      <ContactItems phoneNumber={phoneNumber} />
                    </div>
                  </div>
                  <div className="item-resume rounded text-center mb-2 p-3">
                    <blockquote className="text-center blockquote font-italic mb-0 ">
                      <b className="h3">&ldquo;</b> Full Stack Developer
                      specialised in React. Along with a deep understanding of
                      computer science and networks and experienced with a broad
                      range of tools & software. <b className="h3">&bdquo;</b>
                    </blockquote>
                  </div>

                  <div className="item-resume rounded mb-2 p-3">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faCogs} className="mr-2" />
                      Demonstrative skills
                    </h1>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-6">
                          <ul>
                            <li>Trilingual & excellent communicator</li>
                            <li>Have a positive “can do” attitude</li>
                            <li>Work well in a team & independently</li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul>
                            <li>Problem solver: very adaptable</li>
                            <li>Highly intuitive & practical</li>
                            <li>Curious & fast learner</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                      Projects
                    </h1>
                    <div className="text-center">
                      <div className="d-inline-flex">
                        <p className="mr-2">
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />
                          Work project
                        </p>
                        <p className="mr-2">
                          <FontAwesomeIcon icon={faHome} className="mr-2" />
                          Home project
                        </p>
                        <p className="mr-2">
                          <FontAwesomeIcon icon={faSchool} className="mr-2" />
                          School project
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-emerald">
                        Websites: RESTful API, PWA, WordPress, Static
                      </h5>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        <a
                          href="https://stadium8.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          stadium8.com
                        </a>
                        : website for a client using React (Front End) and
                        WordPress (Back End)
                      </p>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        [anonymous client]: fixing broken code, improving UI/UX
                        and adding features on the website for a tech company
                      </p>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        <a
                          href="http://www.mystickers.com.au/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          mystickers.com.au
                        </a>
                        : WordPress project. Fixing, improving and adding
                        several features for a stickers printing company
                      </p>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        <a
                          href="http://www.benjaminjau.me/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          benjaminjau.me
                        </a>
                        : my personal website entirely built with React, NodeJS
                        and Express
                      </p>

                      <p className="mb-1">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        <a
                          href="https://faceapp-benjaume.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          Face Recognition App
                        </a>
                        : online RESTful API that detect faces from a picture
                        using Clarifai API
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Media Centre: website hosted on my personal server at
                        home to share medias
                      </p>
                    </div>
                    <div>
                      <h5 className="text-emerald">Back End</h5>
                      <p>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        Optic Fibre Infrastructure: managing the database of the
                        deployment of optic fibre cables in Bordeaux area
                      </p>
                    </div>
                    <div>
                      <h5 className="text-emerald">Scripts</h5>
                      <p>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        JavaScript challenges and exercises
                      </p>
                    </div>
                    <div>
                      <h5 className="text-emerald">
                        Hardware & Microcontroller
                      </h5>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        GUI in Python: Interface built with Python to work on
                        Raspberry simulating a flight controller
                      </p>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faSchool} className="mr-2" />
                        Meteofox: Weather Station sending data through an IoT
                        network which allow to consult data on a website
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Self-Driving Car: Small RC car turned into a
                        self-driving car with Arduino
                      </p>
                    </div>
                    <div>
                      <h5 className="text-emerald">
                        Windows Application & Scripts
                      </h5>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faSchool} className="mr-2" />
                        Open Modbus: Windows application built with VB that
                        handle the Modbus connection protocol
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faSchool} className="mr-2" />
                        Call Centre Software: Windows application that manage
                        calls for a taxi company
                      </p>
                    </div>
                    <div>
                      <h5 className="text-emerald">Android application</h5>
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faSchool} className="mr-2" />
                        Recycle Station Finder: Android app that display the
                        nearest recycle stations around you
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faSchool} className="mr-2" />
                        Bluetooth robotic arm: Android app that allow you to
                        control a camera on an arm with several servo motors
                      </p>
                    </div>
                  </div>

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="mr-2"
                      />
                      Education
                    </h1>

                    <div>
                      <h5 className="text-sun-flower">
                        Technical Bachelor Degree in Automated Systems and
                        Industrial Networks
                      </h5>
                      <span>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        2015 - 2016
                      </span>
                      <p className="font-italic mt-2">
                        Apprenticeship - University of Bordeaux & ENGIE INEO
                        Infracom (Bordeaux, FR)
                      </p>
                    </div>

                    <div>
                      <h5 className="text-sun-flower">
                        Advanced Technician Diploma in Computer Science &
                        Networks
                      </h5>
                      <span>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        2013 - 2015
                      </span>
                      <p className="font-italic mt-2">
                        Alfred Kastler High School - Bordeaux, France
                      </p>
                    </div>

                    <div>
                      <h5 className="text-sun-flower">
                        High School Certificate in Digital & Information Systems
                      </h5>
                      <span>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        2011 - 2013
                      </span>
                      <p className="font-italic mt-2">
                        Les Iris High School - Bordeaux, France
                      </p>
                    </div>
                  </div>

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                      Employment history
                    </h1>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Full Stack Developer
                        </span>{" "}
                        @ <i>Freelancing</i> - Sámara, Costa Rica
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        01/2020
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                        <a
                          href="https://stadium8.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          stadium8.com
                        </a>
                      </p>
                      <p>
                        Website of a sports facility. It is built with React for
                        the Front End (as a theme) into a WordPress application,
                        then using the WordPress API for the Back End.
                      </p>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Full Stack Developer
                        </span>{" "}
                        @ <i>[anonymous company</i> - Remote Work
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        12/2020 - Present
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className="mr-2"
                        />
                        Maintainance of the website
                      </p>
                      <p>
                        I am the new web developer and I am in charge of any
                        code edits, users’ rights, fix the website and change
                        the branding. The website is managed by ExpressionEngine
                        as the CMS, and uses Bootstrap as the CSS framework.
                      </p>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Front End Developer
                        </span>{" "}
                        @ <i>Freelancing</i> - Sydney, Australia
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        09/2019
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                        <a
                          href="http://www.mystickers.com.au"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="stadium8.com"
                          className="link-white"
                        >
                          mystickers.com.au
                        </a>
                      </p>
                      <p>
                        Existing website hosted on WordPress using a custom
                        plugin from a third-party company. I had to dive in the
                        code and edit the broken parts to correctly connect to
                        the database and fetch prices, along with adding a new
                        complex quote form.
                      </p>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Project manager
                        </span>{" "}
                        @ <i>ERT Technologies</i> - Bordeaux, France
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        03/2017 - 07/2017
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className="mr-2"
                        />
                        Deployment of the optic fibre in Bordeaux and surrounds
                      </p>
                      <p>
                        I deployed the “SFR Business” (French provider) optic
                        fibre for professionals. Responsibilities included:
                        <ul>
                          <li>
                            Participating in meetings with the provider to
                            follow-up the work
                          </li>
                          <li>
                            Managing more than one project at the same time &
                            creating progress reports
                          </li>
                        </ul>
                      </p>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Network technician
                        </span>{" "}
                        @ <i>ENGIE INEO Infracom</i> - Bordeaux, France
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        09/2015 - 01/2017
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className="mr-2"
                        />
                        Creation of the new ticketing network for the public
                        transport of Bordeaux
                      </p>
                      <p>
                        For more than a year, I had an interesting & important
                        role in this extensive project.
                        <ul>
                          <li>
                            Coding an MS Excel Macro in VBA (~800 lines). The
                            purpose was to organiser the installation of the
                            ticketing machine in each vehicle
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  {/* <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faMedal} className="mr-2" />
                      Training qualifications
                    </h1>

                    <p>Will come later</p>
                  </div> */}

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faPlus} className="mr-2" />
                      Hobbies and interests
                    </h1>

                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-6">
                          <dl>
                            <dt className="font-weight-normal p-1">
                              <FontAwesomeIcon
                                icon={faTools}
                                className="mr-2"
                              />
                              DIY attitude:{" "}
                              <span className="text-emerald">fixing</span>,{" "}
                              <span className="text-emerald">upgrading</span>{" "}
                              and{" "}
                              <span className="text-emerald">improving</span>{" "}
                              objects
                            </dt>
                            <dt className="font-weight-normal p-1">
                              <FontAwesomeIcon
                                icon={faMusic}
                                className="mr-2"
                              />
                              Practice
                              <span className="text-emerald"> salsa </span>
                              dancing
                            </dt>
                          </dl>
                        </div>
                        <div className="col-sm-6">
                          <dl>
                            <dt className="font-weight-normal p-1">
                              <FontAwesomeIcon
                                icon={faPlaneDeparture}
                                className="mr-2"
                              />
                              Travels:{" "}
                              <span className="text-emerald">Europe</span>{" "}
                              (France, UK, Netherlands),{" "}
                              <span className="text-emerald">Western Asia</span>{" "}
                              (UAD),{" "}
                              <span className="text-emerald">Oceania</span>{" "}
                              (Australia),{" "}
                              <span className="text-emerald">America</span>{" "}
                              (USA, Costa Rica)
                            </dt>
                            <dt className="font-weight-normal p-1">
                              <FontAwesomeIcon
                                icon={faHeartbeat}
                                className="mr-2"
                              />
                              <span className="text-emerald">Sport:</span>{" "}
                              running, cycling, gym
                            </dt>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
