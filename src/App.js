import { useEffect } from "react";
import DistortedLogo from "./audacious-logo-d.png";
import CampLogo from "./camp-logo.png";
import Dates from "./dates.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import "./App.css";

import ReactGA from "react-ga";
const TRACKING_ID = "G-95R0YBF217"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
     ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className="middle">
      <section className="img-containers">
        <RoughNotationGroup>
          <RoughNotation
            type="circle"
            animationDelay={1000}
            order={1}
            show={true}
          >
            <img
              className="audacious-logo"
              alt="Audacious"
              src={DistortedLogo}
            />
          </RoughNotation>
          <RoughNotation type="box" animationDelay={2250} order={2} show={true}>
            <img className="audacious-logo" alt="Youth camp" src={CampLogo} />
          </RoughNotation>
          <RoughNotation
            type="circle"
            animationDelay={3500}
            order={3}
            show={true}
          >
            <img className="audacious-logo" alt="28-30th July" src={Dates} />
          </RoughNotation>
          <RoughNotation type="highlight" animationDelay={4750}  show={true}>
            <a
              className="book-in-text"
              href="https://audacious.churchsuite.com/events/7cqdfbmt"
            >
              BOOK IN
            </a>
          </RoughNotation>
        </RoughNotationGroup>
      </section>
    </main>
  );
};

export default App;
