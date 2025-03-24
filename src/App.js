import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Works from "./components/Works";
import Works1 from "./components/Works1";
import Works2 from "./components/Works2";
import WorksB from "./components/WorksB";
import WorksC from "./components/WorksC";
import Landing from "./components/Landing";
import About from "./components/About";
import Info from "./components/info";
import Contact from "./components/Contact";
import Thanks from "./components/thanks";

function App() {
  return (
    <>
      <Landing></Landing>
      <div>
        <Works></Works>
        <Works1></Works1>
        <Works2></Works2>
        <WorksC></WorksC>
        <WorksB></WorksB>
        <Info></Info>
      </div>
      <div>
        <About></About>
      </div>
      <div className="contact-container">
        <Router>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
