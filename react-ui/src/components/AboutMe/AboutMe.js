import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowAltCircleDown
} from "@fortawesome/free-regular-svg-icons";
import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <section className="text-white text-center pt-5">
              <h1 className="display-4">About me</h1>

              <p>
                Hi, I am Benjamin Jaume, I am a 24 year-old Frenchman living in
                Sydney for almost 2 years. In early 2018, I was eager to
                discover the world!
              </p>
              <p>
                was curious about being imersed in a new country, a new culture,
                a new way to think, new landscape, and also new language!
              </p>
              <p>
                Now I am taking courses, attempting events, connecting with
                people and much more to start my career in the field that has
                always been made for me! On my spare time, I like to go for
                hikes, eat some sushis, travel somewhere or even go for a long
                run. Self-consciousness, self-development food and sport
              </p>

              <a href="#first-event" className="btn btn-warning btn-lg mt-4">
                Show me the beginning
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="ml-2" />
              </a>
            </section>
          </div>

          <div className="col-md-8 col-12 mx-auto">
            <section className="text-white my-5">
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">Australia</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2018-2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Let&apos;s discover the world!
                </p>
              </div>
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">Let&apos;s travel</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2017
                </span>
                <p className="text-small mt-2 font-weight-light">
                  The project came to an end so I had to find something else to
                  do. This is why I thought that I copd start discovering what
                  is around in Europe. I travelled to the UK with a friend of
                  mine and to Netherlands with my brother.
                </p>
                <p>
                  Because of all these travels, I took the decision travel to
                  Australia so I had to save up a bit of money and be prepared
                  for the biggest trip of my life!
                </p>
              </div>
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">My first job</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2016
                </span>
                <p className="text-small mt-2 font-weight-light">
                  At the end of my studies, the company I did my apprenticeship
                  with hired me at a casual worker. I was responsible for the
                  deployment of the ticketing machines (maintaining the MS Excel
                  Macro), and uploading their software. I also gave a hand to
                  the electricians installing the equipments in the vehicles.
                  Because it was also interesting for me, I decided to continue
                  in the fiels of electrical installation and work night-shifts.
                </p>
              </div>
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">
                  Technical Bachelor Degree in both Computer Science &
                  Industrial Network
                </h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2015 - 2016
                </span>
                <p className="text-small mt-2 font-weight-light">
                  I continued my studies with an apprenticeship. This year was
                  all about applying the knowledge I&apos;ve accumulated in the
                  past few years at school but also at work. Even with a high
                  level of math & physic, we had a lot to learn: industrial
                  programming, cryptography, security, database, network,
                  hardware, etc.
                </p>
                <p>
                  The company was specialised in optic fibre, installing
                  landline and embed equipment. I was working on the big project
                  of replacing ticketing machines in Traways & Bus. I&apos;ve
                  provided a solution for a better management of the deployment
                  by developing a 800-lines MS Excel Macro.
                </p>
              </div>
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">
                  Advanced Technician Degree in Computer Science & Networks
                </h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2013 - 2015
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Beginning of my studies at Uni. It is getting more technical
                  and computer science orientaded. I spent more thant hald of my
                  weeks in the lab with 4 different teacher all specialised in
                  different field in I.T. One was teaching Networks/Windows, one
                  teaching Linux/Database/C programming, one teaching C/C++/OOP
                  programming, one teaching Electronic/Data.
                </p>
                <p>
                  This is where I&apos;ve learn the most things in I.T and this
                  is where I had the best time studying. We had to create a lot
                  of different application and project assessed thouhought the 2
                  years.
                </p>
              </div>

              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">
                  Bachelor Degree in Digital & Information Systems
                </h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2011 - 2013
                </span>
                <p className="text-small mt-2 font-weight-light">
                  I started a 2-years program in Computer Science, where I leart
                  the fundamentals of electronic, math, physic and programming.
                  I also had the chance to discover how technologies and
                  sustainable development work.
                </p>
                <p>
                  The teachers (which I was getting along well) had a big
                  knowledge with, and I was confortable with computer science so
                  I created with a friend a few projects (check my{" "}
                  <Link to="/portfolio" className="text-emerald">
                    <u>portfolio</u>
                  </Link>
                  ). The main projects we had were based on C/C++
                  micro-controllers, Arduino and Labview.
                </p>
              </div>
              <div id="first-event" className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">Where everything started</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2010
                </span>
                <p className="text-small mt-2 font-weight-light">
                  It all started when I was 15: my father gave me his Casio
                  Graph 35+ Calculator. I started programming for my friends and
                  I to solve mathematical problem and create games. I I
                  discovered that I was passionate about algorithmic, problem
                  solving and programming.
                </p>
              </div>
            </section>
            {/* End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
