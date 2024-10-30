import React, { useRef } from "react";

import grammie from "./Reverend Site.png";

const Works = React.forwardRef((props, ref) => {
  const worksRef = useRef(null);

  return (
    <div id="workslinker" ref={worksRef} className="works-container two">
      <div className="project-content-container">
        <div className="works-header two">
          <h1>03 / 05</h1>
        </div>
        <div className="project-container two">
          <h1>Website for A Reverened Sister</h1>
          <div className="skills-section two">
            <button>HTML</button>
            <button>CSS</button>
            <button>BOOTSTRAP</button>
            <button>JAVASCRIPT</button>
            <button>RESPONSIVE DESIGN</button>
          </div>
          <div className="project-info two">
            <div className="project-title">
              <h3>Project</h3>
              <h2>Personal Website</h2>
            </div>
            <div className="project-role">
              <h3>Role</h3>
              <h2>Web Developer</h2>
            </div>
            <div className="project-date">
              <h3>Date</h3>
              <h2>July 2024</h2>
            </div>
          </div>
          <div className="project-link two">
            <button>
              <a target="blank" href="https://sister-bridget.vercel.app">
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-image-container">
        <div className="project-image">
          <img src={grammie}></img>
        </div>
      </div>
    </div>
  );
});

export default Works;
