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
        <RoughNotationGroup show={true}>
          <RoughNotation type="circle" order={1}>
            <img
              className="audacious-logo"
              alt="Audacious"
              src={DistortedLogo}
            />
          </RoughNotation>
          <RoughNotation type="box" order={2}>
            <img className="audacious-logo" alt="Youth camp" src={CampLogo} />
          </RoughNotation>
          <RoughNotation type="circle" order={3}>
            <img className="audacious-logo" alt="28-30th July" src={Dates} />
          </RoughNotation>
          <RoughNotation type="highlight" order={4}>
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
