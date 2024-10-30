import React, { useRef } from "react";

import ikjot from "./Pdf Site.png";

const Works = React.forwardRef((props, ref) => {
  const worksRef = useRef(null);

  return (
    <div ref={worksRef} className="works-container c">
      <div className="project-content-container">
        <div className="works-header c">
          <h1>04 / 05</h1>
        </div>
        <div className="project-container c">
          <h1>PDF Library</h1>
          <div className="skills-section c">
            <button>HTML</button>
            <button>CSS</button>
            <button>BOOTSTRAP</button>
            <button>JAVASCRIPT</button>
            <button>RESPONSIVE DESIGN</button>
          </div>
          <div className="project-info c">
            <div className="project-title">
              <h3>Project</h3>
              <h2>Pdf Download Portal</h2>
            </div>
            <div className="project-role">
              <h3>Role</h3>
              <h2>Frontend Lead</h2>
            </div>
            <div className="project-date">
              <h3>Date</h3>
              <h2>July 2024</h2>
            </div>
          </div>
          <div className="project-link c">
            <button>
              <a target="blank" href="https://emerald-omega.vercel.app">
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-image-container">
        <div className="project-image">
          <img src={ikjot}></img>
        </div>
      </div>
    </div>
  );
});

export default Works;
