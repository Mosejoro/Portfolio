import React, { useRef } from "react";

import sipinor from "./Hub Site.png";

const Works = React.forwardRef((props, ref) => {
  const worksRef = useRef(null);

  return (
    <div id="workslinker" ref={worksRef} className="works-container">
      <div className="project-content-container">
        <div className="works-header">
          <h1>01 / 05</h1>
        </div>
        <div className="project-container">
          <h1>Hub For Digital Excellence</h1>
          <div className="skills-section">
            <button>HTML</button>
            <button>CSS</button>
            <button>BOOTSTRAP</button>
            <button>JAVASCRIPT</button>
            <button>RESPONSIVE DESIGN</button>
          </div>
          <div className="project-info">
            <div className="project-title">
              <h3>Project</h3>
              <h2>Hub For Digital Excellence</h2>
            </div>
            <div className="project-role">
              <h3>Role</h3>
              <h2>Frontend Lead</h2>
            </div>
            <div className="project-date">
              <h3>Date</h3>
              <h2>October 2024</h2>
            </div>
          </div>
          <div className="project-link">
            <button>
              <a target="blank" href="https://xolu.vercel.app">
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="project-image-container">
        <div className="project-image">
          <img src={sipinor}></img>
        </div>
      </div>
    </div>
  );
});

export default Works;
