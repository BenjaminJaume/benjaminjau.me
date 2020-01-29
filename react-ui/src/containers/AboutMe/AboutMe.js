import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowAltCircleDown
} from "@fortawesome/free-regular-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

import "./AboutMe.css";

function calculateAge(dateOfBirth) {
  var today = new Date(),
    birthDate = new Date(dateOfBirth),
    age = today.getFullYear() - birthDate.getFullYear(),
    m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  return age;
}

const AboutMe = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-sm-10 col-12 mx-auto">
            <section className="text-white text-center pt-5">
              <h1 className="display-4">About me</h1>

              <div className="mb-3">
                <h4>
                  Hi, I am Benjamin Jaume, I am a {calculateAge("06/27/1995")}{" "}
                  year-old developer living in Samara (Costa Rica).
                </h4>
              </div>
              <div className="mb-3">
                <p className="h5">
                  <span className="title-description">Front-End Developer</span>
                  : Specialised in React with NodeJS and Express
                </p>
                <p className="h5">
                  <span className="title-description">Traveller</span>:
                  Fascinated by visiting amazing places in the world
                </p>
                <p className="h5">
                  <span className="title-description">Investigator</span>:
                  Interested in mindfulness and self-development
                </p>
              </div>
              <div>
                <p>
                  When I was 22, I was curious about being imersed in a new
                  country, a new culture, a new way to think, new landscape, and
                  also new language!
                </p>
                <p>
                  Now I am taking courses, attempting events, connecting with
                  people and much more to start my career in the field that has
                  always been made for me! On my spare time, I like to go for
                  hikes, eat sushis, travel somewhere or even go for a long run.
                  Self-consciousness, self-development food and sport
                </p>
              </div>

              <div>
                <a href="#first-event" className="btn btn-warning btn-lg mt-4">
                  Show me the beginning
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className="ml-2"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-8 col-sm-8 col-12 mx-auto">
            <section className="text-white my-5">
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">Costa Rica</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2019-2020
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Here I am, with my 2 big luggages and my backpack, ready for
                  my next adventure. I arrived in Costa Rica at the end of
                  November 2019, and still leave in Sarama since then.
                </p>
              </div>
              <div className="event-about-me rounded mb-2 p-3">
                <h5 className="text-emerald">Australia</h5>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  2018-2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  So I was ready to leave France to start traveling and discover
                  the world. I landed in Sydney mid-January 2018, I was on my
                  own, starting in a backpacker. I had the occasion to discover
                  the Opera House, the Harbour Bridge and pet a kangaroos and
                  koalas.
                </p>
                <p>
                  My trip brought me pretty much everywhere around central &
                  eastern Australia! I visited the capital (Canberra), did a
                  road trip along the east coast (from Sydney to Brisbane), I
                  also went to Uluru and Alice Springs (central Australia),
                  scuba-dived at the Great Barrier Reef from Cairns
                </p>
                <p>
                  I really had a good time in Oceania, and this adventure
                  changed my life. Around the end of 2019, I had the occasion to
                  move to another country and join my best friend in Costa Rica
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
                  do. This is why I thought that I could start discovering what
                  is around in Europe. I travelled to the UK with a friend of
                  mine and to the Netherlands with my brother.
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
                  <LinkContainer to="/portfolio">
                    <span className="link-emerald">portfolio</span>
                  </LinkContainer>
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
