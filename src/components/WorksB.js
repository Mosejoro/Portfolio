import React, { useRef } from "react";

import kygo from "./Digital Web.png";

const Works = React.forwardRef((props, ref) => {
  const worksRef = useRef(null);

  return (
    <div ref={worksRef} className="works-container b">
      <div className="project-content-container">
        <div className="works-header B">
          <h1>05 / 05</h1>
        </div>
        <div className="project-container b">
          <h1>Digital Service Platform</h1>
          <div className="skills-section b">
            <button>HTML</button>
            <button>CSS</button>
            <button>BOOTSTRAP</button>
            <button>JAVASCRIPT</button>
            <button>RESPONSIVE DESIGN</button>
          </div>
          <div className="project-info b">
            <div className="project-title">
              <h3>Project</h3>
              <h2>Digital Hub</h2>
            </div>
            <div className="project-role">
              <h3>Role</h3>
              <h2>Developer Lead</h2>
            </div>
            <div className="project-date">
              <h3>Date</h3>
              <h2>March 2024</h2>
            </div>
          </div>
          <div className="project-link b">
            <button>
              <a target="blank" href="https://favour-blond.vercel.app">
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-image-container">
        <div className="project-image">
          <img src={kygo}></img>
        </div>
      </div>
    </div>
  );
});

export default Works;
