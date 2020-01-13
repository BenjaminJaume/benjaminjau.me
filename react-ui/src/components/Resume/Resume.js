import React from "react";
import { Button } from "react-bootstrap";
import { SaveAlt } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faCogs,
  faList,
  faGraduationCap,
  faBriefcase,
  // faMedal,
  faPlusSquare,
  faPlaneDeparture,
  faTools,
  faMusic,
  faHeartbeat
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import ContactItems from "../ContactItems/ContactItems";

import "./Resume.css";

const Resume = ({ phoneNumber }) => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="text-center text-white">
              <h1 className="display-4">Resume</h1>
              <p>
                Welcome to the resume section.
                <br />
                Read it here or download it!
              </p>
              <Button
                variant="success"
                className="resume-button font-weight-bold px-3 m-2"
              >
                <SaveAlt className="align-bottom mr-1" />
                Give me the PDF
              </Button>
            </div>
          </div>

          <hr className="divider mx-auto" />

          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-md-8 col-12 mx-auto">
                <div className="text-white">
                  <div className="item-resume rounded text-center mb-2 p-3">
                    <h1>Benjamin Jaume</h1>
                    <h4>
                      Rancho Angela, Samara
                      <br /> Nicoya, Guanacaste
                      <br />
                      Costa Rica
                    </h4>
                    <h4>
                      <a
                        href="mailto:benjamin.jaume@gmail.com"
                        className="link-sun-flower"
                      >
                        benjamin.jaume@gmail.com
                      </a>
                    </h4>

                    <h4>
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                      <a href="tel:+50687907001" className="link-sun-flower">
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
                    <div className="brand-icons-contact">
                      <ContactItems phoneNumber={phoneNumber} />
                    </div>
                  </div>
                  <div className="item-resume rounded text-center mb-2 p-3">
                    <blockquote className="text-center blockquote font-italic mb-0 ">
                      &laquo; Front End Developer experienced with lots of
                      different tools (languages, framework, software, hardware,
                      OS, etc.) and a deep understanding of computer science and
                      networks &raquo;
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
                            <li>Problem solver: very a daptable</li>
                            <li>Highly intuitive & practical</li>
                            <li>Curious & fast learner</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faList} className="mr-2" />
                      Projects
                    </h1>
                    <div>
                      <h5 className="text-emerald">
                        HTML 5 - CSS 3 - Javascript - Bootstrap 4
                      </h5>
                      <ul>
                        <li>Many different websites</li>
                        <li>
                          “Recycle Station Finder”: app created with Intel XDK.
                          It displays the nearest recycle stations around
                          University of Bordeaux.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">
                        PHP - PhpMyAdmin - SQL - WampServer
                      </h5>
                      <ul>
                        <li>
                          Media centre at home. Hosted on my private physical
                          server, accessible from everywhere
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">Python 3</h5>
                      <ul>
                        <li>
                          GUI for Raspberry Pi (Raspbian OS, based on Debian)
                          for a company in Costa Rica GTK+ & Glade.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">C</h5>
                      <ul>
                        <li>
                          Weather station with sensors, using Telecom Design
                          chip and Sygfox network (IoT)
                        </li>
                        <li>
                          Coffee table with a LED grid (Arduino project at
                          home). Inspired by Daft Punk Coffee Table.
                        </li>
                        <li>
                          Autonomous and self driving RC Car (Arduino project at
                          home)GUI for Raspberry Pi (Raspbian OS, based on
                          Debian) for a company in Costa Rica GTK+ & Glade.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">VBA</h5>
                      <ul>
                        <li>
                          MS Excel sheet for the public transport of Bordeaux,
                          to manage the installation of the embedded ticketing
                          machines.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">C++</h5>
                      <ul>
                        <li>
                          “Parcel Delivers”: software that manage parcel
                          deliveries created with MS Visual Studio.
                        </li>
                        <li>
                          Weather station with sensors and a GUI, using Arduino
                          and LabVIEW
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">Java</h5>
                      <ul>
                        <li>
                          “Robot Arm Control”: Android application controlling
                          the orientation of a robotic arm with an Android phone
                          via Bluetooth. Created with Eclipse IDE
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-emerald">Bash/Shell - Batch :</h5>
                      <ul>
                        <li>
                          Running command lines on Windows and UNIX
                          BenjaminJaume
                        </li>
                      </ul>
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
                  </div>

                  <div className="item-resume rounded py-3 px-4 mb-2">
                    <h1 className="title-resume text-center">
                      <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                      Employment history
                    </h1>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Project manager
                        </span>{" "}
                        @ <i>ERT Technologies</i> - Bordeaux, FR
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        03/2017 - 07/2017
                      </p>
                      <p>
                        <u>Project:</u> deploying the “SFR Business” optic fibre
                        in Bordeaux and surrounds
                      </p>
                      <div className="mt-2">
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
                      </div>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          Network technician
                        </span>{" "}
                        @ <i>ENGIE INEO Infracom</i> - Bordeaux, FR
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        [...] - 07/2017
                      </p>
                      <p>
                        <u>Project:</u> creating the new ticketing network for
                        Bordeaux public transport
                      </p>
                      <p className="mt-2">
                        For more than a year, I had an interesting & important
                        role in this extensive project.  Coding an MS Excel
                        Macro in VBA. The purpose was to organiser the
                        installation of the ticketing machine in each vehicles.
                      </p>
                    </div>

                    <div>
                      <h5>
                        <span className="text-electron-blue">
                          AutoCAD draftsman
                        </span>{" "}
                        @ <i>ENGIE INEO Infracom</i> - Bordeaux, FR
                      </h5>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        09/2015 - [...]
                      </p>
                      <p>
                        <u>Project:</u> drawing the optic fiber infrastructure
                      </p>
                      <p className="mt-2">
                        I was in charge to make request to the organisation that
                        handle the burried infrastructure in France, and learn
                        regulation rules.
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
                      <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
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
                          </dl>
                        </div>
                        <div className="col-sm-6">
                          <dl>
                            <dt className="font-weight-normal p-1">
                              <FontAwesomeIcon
                                icon={faMusic}
                                className="mr-2"
                              />
                              Practice
                              <span className="text-emerald"> salsa </span>
                              dancing
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
