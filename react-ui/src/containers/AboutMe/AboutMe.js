import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowAltCircleDown,
  faHeart
} from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
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
          <div className="col-12 col-sm-10 col-lg-8 col-xl-6 mx-auto">
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
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-8 col-sm-8 col-12 mx-auto">
            <Tabs>
              <TabList>
                <Tab>
                  <span className="h5 font-weight-bold text-peter-river mb-0 pb-0">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    My interests
                  </span>
                </Tab>
                <Tab>
                  <span className="h5 font-weight-bold text-peter-river mb-0 pb-0">
                    <FontAwesomeIcon icon={faList} className="mr-2" />
                    My story
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <section className="text-white mb-5">
                  <h1>Full Stack Dev Courses</h1>

                  <p>Completed courses on Web Dev:</p>
                  <ul>
                    <li>
                      <a
                        href="https://frontendmasters.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h3">Front End Masters</span>
                      </a>
                    </li>
                    <ul>
                      <li>
                        <a
                          href="https://frontendmasters.com/learn/beginner/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-peter-river-about-me"
                        >
                          Web Dev Beginner Course
                        </a>
                      </li>
                      <ul>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/web-development-v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Complete Intro to Web Development, v2
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/css-grids-flexbox/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            CSS Grids and Flexbox for Responsive Web Design
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/getting-started-javascript-v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Getting Started with JavaScript, v2
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/js-fundamentals-functional-v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            JavaScript: From Fundamentals to Functional JS, v2
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/chrome-dev-tools-v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Mastering Chrome Developer Tools v2
                          </a>
                        </li>
                      </ul>
                      <li>
                        <a
                          href="https://frontendmasters.com/learn/react/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-peter-river-about-me"
                        >
                          React Course
                        </a>
                      </li>

                      <ul>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/complete-react-v5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Complete Intro to React, v5
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://frontendmasters.com/courses/intermediate-react-v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Intermediate React, v2
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/advanced-react-patterns/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Advanced React Patterns
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/testing-react/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Testing React Applications, v2
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://frontendmasters.com/courses/react-state/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Advanced State Management in React (feat. Redux and
                            MobX)
                          </a>
                        </li> */}
                      </ul>

                      <li>
                        <a
                          href="https://frontendmasters.com/courses/gatsby/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-peter-river-about-me"
                        >
                          Introduction to Gatsby
                        </a>
                      </li>
                    </ul>

                    <li>
                      <a
                        href="https://www.udemy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h3">Udemy</span>
                      </a>
                    </li>
                    <ul>
                      <li>
                        <a
                          href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-peter-river-about-me"
                        >
                          The Complete Web Developer in 2020: Zero to Mastery
                        </a>
                      </li>
                    </ul>
                  </ul>

                  <h1>Podcasts</h1>

                  <ul>
                    <li>
                      <a
                        href="https://tim.blog/podcast/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me h5"
                      >
                        Tim Ferris Show
                      </a>

                      <ul>
                        <li>
                          <a
                            href="https://tim.blog/2015/12/14/derek-sivers-on-developing-confidence-finding-happiness-and-saying-no-to-millions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Tim Ferris Show - #125 Derek Sivers on Developing
                            Confidence, Finding Happiness, and saying "No" to
                            Millions
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tim.blog/2018/10/29/sam-harris-waking-up/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Tim Ferris Show - #342 Sam Harris, Ph.D. — How to
                            Master Your Mind
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://frontendhappyhour.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me h5"
                      >
                        Front End Happy Hour
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://frontendhappyhour.com/episodes/beers-and-careers-career-management/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Episode 093 - Beers and Careers - Career Management
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="h5">Sam Harris</span>
                      <ul>
                        <li>Sam Harris & Roland Griffiths</li>
                      </ul>
                    </li>
                  </ul>

                  <h1>Shows</h1>

                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/user/PowerfulJRE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me h5"
                      >
                        Joe Rogan Experience
                      </a>

                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=0pmviUS1Zac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Joe Rogan Experience #1347 - Neil deGrasse Tyson
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=ycPr5-27vSI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Joe Rogan Experience #1169 - Elon Musk
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=efs3QRr8LWw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Joe Rogan Experience #1368 - Edward Snowden
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://www.ted.com/talks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me h5"
                      >
                        Ted Talks
                      </a>

                      <ul>
                        <li>
                          <a
                            href="https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Tim Urban - Inside the mind of a master
                            procrastinator
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me h5"
                      >
                        Youtube
                      </a>

                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/playlist?list=PLjq6DwYksrzz_fsWIpPcf6V7p2RNAneKc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            THE AGE OF A.I.
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=Nzl1BOUjyqE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Everything Is F*cked: A Book About Hope | Mark
                            Manson | Talks at Google
                          </a>
                        </li>

                        <li>Cosmos - Season 2 (By Neil deGrasse Tyson)</li>
                      </ul>
                    </li>

                    <li>
                      <span className="h5">Documentaries</span>
                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=CcUjwt0M31I"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            The Great Pyramides K 2019 [FR]
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <span className="h5">Other</span>
                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=-EvvPZFdjyk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Alain de Botton - Why you will marry the wrong
                            person
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=JPPlicAEFec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Wim Hof & Russell Brand - Heal Yourself
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=XWMR97rQc20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Dr. Gundry Interviews Dave Asprey | Ep34
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h1>Books</h1>

                  <ul>
                    <li>
                      "<i>Harry Potter and the Philosopher's Stone</i>" - J.K
                      Rowling
                    </li>
                    <li>
                      "<i>As a Man Tinketh</i>" - James Allen
                    </li>
                    <li>
                      "<i>The Guide to Self-Knowledge</i>" - Mark Manson
                    </li>
                    <li>
                      "<i>1984</i>" - Georges Orwell
                    </li>
                    <li>
                      "<i>Man are from Mars, Women are from Venus</i>" - John
                      Gray
                    </li>
                    <li>
                      "<i>The Four Agreements</i>" - don Miguel Ruiz
                    </li>
                    <li>
                      "<i>The Subtle Art of Not Giving a Fuck</i>" - Mark Manson
                    </li>
                    <li>
                      "<i>Everything is Fucked - A Book About Hope</i>" - Mark
                      Manson
                    </li>
                  </ul>

                  <h1>Articles</h1>

                  <ul>
                    <li>
                      <a
                        href="https://hackernoon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Hacker Noon</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://hackernoon.com/are-we-ever-going-to-solve-cyber-security-1lag36th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Are We Ever Going to Solve Cyber Security?
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Medium</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://medium.com/@prestonwallace/3-ways-improve-react-seo-without-isomorphic-app-a6354595e400"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            3 Essential Tools to Boost your React App’s SEO
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://alligator.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Alligator.io</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://alligator.io/react/server-side-rendering/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            React Server Side Rendering
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://waitbutwhy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Wait But Why</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://waitbutwhy.com/2017/03/elon-musk-post-series.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            The Elon Musk Post Series - Wait But Why
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://waitbutwhy.com/2013/10/why-procrastinators-procrastinate.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Why Procrastinators Procrastinate
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://waitbutwhy.com/2015/03/procrastination-matrix.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            The Procrastination Matrix
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://www.nytimes.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">New York Times</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://www.nytimes.com/2014/07/27/sunday-review/no-time-to-think.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            No Time to Think
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://www.entrepreneur.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Entrepreneur.com</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://www.entrepreneur.com/article/270631"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            The 8 Secrets of Great Communicators
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://www.huffpost.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Huff Post</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://www.huffpost.com/entry/what-if-i-dont-have-a-dre_b_14682060?guccounter=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            What If I Don’t Have A Dream?
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://markmanson.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Mark Manson</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://markmanson.net/self-awareness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            The Three Levels of Self-Awareness
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://markmanson.net/fuck-your-feelings"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Fuck Your Feelings
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://pathwaytohappiness.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">Pathway To Happiness</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://pathwaytohappiness.com/blog/becoming-observer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            Becoming The Observer
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://codeburst.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">CodeBurst.io</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            ES6 Destructuring: The Complete Guide
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="https://itnext.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        <span className="h5">iNext.io</span>
                      </a>
                      <ul>
                        <li>
                          <a
                            href="https://itnext.io/how-to-unit-test-in-react-72e911e2b8d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-peter-river-about-me"
                          >
                            How to Unit Test in React
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h1>Newsletters</h1>

                  <ul>
                    <li>
                      <a
                        href="https://medium.com/zerotomastery/web-developer-monthly-november-2019-9e2feb4ed4bd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-peter-river-about-me"
                      >
                        Web Developer Monthly - Andrei Neagoie
                      </a>
                    </li>
                  </ul>
                </section>
              </TabPanel>

              <TabPanel>
                <section className="text-white text-center mb-5">
                  <div className="mb-5">
                    <a
                      href="#first-event"
                      className="btn btn-warning btn-lg mt-4"
                    >
                      Show me the beginning
                      <FontAwesomeIcon
                        icon={faArrowAltCircleDown}
                        className="ml-2"
                      />
                    </a>
                  </div>
                  <div className="event-about-me rounded mb-2 p-3">
                    <h5 className="text-emerald">Costa Rica</h5>
                    <span>
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      2019-2020
                    </span>
                    <p className="text-small mt-2 font-weight-light">
                      Here I am, with my 2 big luggages and my backpack, ready
                      for my next adventure. I arrived in Costa Rica at the end
                      of November 2019, and still leave in Sarama since then.
                    </p>
                  </div>
                  <div className="event-about-me rounded mb-2 p-3">
                    <h5 className="text-emerald">Australia</h5>
                    <span>
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      2018-2019
                    </span>
                    <p className="text-small mt-2 font-weight-light">
                      So I was ready to leave France to start traveling and
                      discover the world. I landed in Sydney mid-January 2018, I
                      was on my own, starting in a backpacker. I had the
                      occasion to discover the Opera House, the Harbour Bridge
                      and pet a kangaroos and koalas.
                    </p>
                    <p>
                      My trip brought me pretty much everywhere around central &
                      eastern Australia! I visited the capital (Canberra), did a
                      road trip along the east coast (from Sydney to Brisbane),
                      I also went to Uluru and Alice Springs (central
                      Australia), scuba-dived at the Great Barrier Reef from
                      Cairns
                    </p>
                    <p>
                      I really had a good time in Oceania, and this adventure
                      changed my life. Around the end of 2019, I had the
                      occasion to move to another country and join my best
                      friend in Costa Rica
                    </p>
                  </div>
                  <div className="event-about-me rounded mb-2 p-3">
                    <h5 className="text-emerald">Let&apos;s travel</h5>
                    <span>
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      2017
                    </span>
                    <p className="text-small mt-2 font-weight-light">
                      The project came to an end so I had to find something else
                      to do. This is why I thought that I could start
                      discovering what is around in Europe. I travelled to the
                      UK with a friend of mine and to the Netherlands with my
                      brother.
                    </p>
                    <p>
                      Because of all these travels, I took the decision travel
                      to Australia so I had to save up a bit of money and be
                      prepared for the biggest trip of my life!
                    </p>
                  </div>
                  <div className="event-about-me rounded mb-2 p-3">
                    <h5 className="text-emerald">My first job</h5>
                    <span>
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      2016
                    </span>
                    <p className="text-small mt-2 font-weight-light">
                      At the end of my studies, the company I did my
                      apprenticeship with hired me at a casual worker. I was
                      responsible for the deployment of the ticketing machines
                      (maintaining the MS Excel Macro), and uploading their
                      software. I also gave a hand to the electricians
                      installing the equipments in the vehicles. Because it was
                      also interesting for me, I decided to continue in the
                      fiels of electrical installation and work night-shifts.
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
                      I continued my studies with an apprenticeship. This year
                      was all about applying the knowledge I&apos;ve accumulated
                      in the past few years at school but also at work. Even
                      with a high level of math & physic, we had a lot to learn:
                      industrial programming, cryptography, security, database,
                      network, hardware, etc.
                    </p>
                    <p>
                      The company was specialised in optic fibre, installing
                      landline and embed equipment. I was working on the big
                      project of replacing ticketing machines in Traways & Bus.
                      I&apos;ve provided a solution for a better management of
                      the deployment by developing a 800-lines MS Excel Macro.
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
                      Beginning of my studies at Uni. It is getting more
                      technical and computer science orientaded. I spent more
                      thant hald of my weeks in the lab with 4 different teacher
                      all specialised in different field in I.T. One was
                      teaching Networks/Windows, one teaching Linux/Database/C
                      programming, one teaching C/C++/OOP programming, one
                      teaching Electronic/Data.
                    </p>
                    <p>
                      This is where I&apos;ve learn the most things in I.T and
                      this is where I had the best time studying. We had to
                      create a lot of different application and project assessed
                      thouhought the 2 years.
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
                      I started a 2-years program in Computer Science, where I
                      leart the fundamentals of electronic, math, physic and
                      programming. I also had the chance to discover how
                      technologies and sustainable development work.
                    </p>
                    <p>
                      The teachers (which I was getting along well) had a big
                      knowledge with, and I was confortable with computer
                      science so I created with a friend a few projects (check
                      my{" "}
                      <LinkContainer to="/portfolio">
                        <span className="link-peter-river-about-me">
                          portfolio
                        </span>
                      </LinkContainer>
                      ). The main projects we had were based on C/C++
                      micro-controllers, Arduino and Labview.
                    </p>
                  </div>
                  <div
                    id="first-event"
                    className="event-about-me rounded mb-2 p-3"
                  >
                    <h5 className="text-emerald">Where everything started</h5>
                    <span>
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      2010
                    </span>
                    <p className="text-small mt-2 font-weight-light">
                      It all started when I was 15: my father gave me his Casio
                      Graph 35+ Calculator. I started programming for my friends
                      and I to solve mathematical problem and create games. I I
                      discovered that I was passionate about algorithmic,
                      problem solving and programming.
                    </p>
                  </div>
                </section>
              </TabPanel>
            </Tabs>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
