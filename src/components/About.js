import React, { useState } from "react";

import aboutme from "./logo-grayscale-inverted.png";

import skillhtml from "./html5.png";
import skillcss from "./css3.png";
import skilljs from "./javascript.png";
import skillreact from "./React.webp";
import skilltailwind from "./tailwind.png";
import resume from "./Resume.pdf";
import skillnode from "./Bootstrap.png";

function About() {
  return (
    <div id="aboutlinker" className="about-container">
      <div className="about-main">
        <div className="about-left">
          <div className="image-border">
            <img src={aboutme}></img>
          </div>
          <h1>Monehin John</h1>
          <h3>Let's build something great together</h3>
          <a href={resume}>Download CV</a>
        </div>
        <div className="about-right">
          <h1>Hey, nice to see you!</h1>
          <h3>
            Hey, I am John and I'm a frontend developer specializing in HTML,CSS
            and it's framework(Tailwind And Bootstrap), and Javascript, with
            experience in React. Currently, I work at Hub for Digital
            Excellence, where i build Website for various Services and Summit.
            My commitment to fast delivery and continous learning drives my
            passion for mastering the world of web development.Let's connect for
            collaboration.
          </h3>
          <h2>Relevant Skills</h2>
          <div className="about-skills">
            <div className="about-skill">
              <img src={skillhtml}></img>
              <h4>HTML</h4>
            </div>
            <div className="about-skill">
              <img src={skillcss}></img>
              <h4>CSS</h4>
            </div>
            <div className="about-skill">
              <img src={skilljs}></img>
              <h4>JavaScript</h4>
            </div>
            <div className="about-skill">
              <img src={skillreact}></img>
              <h4>React</h4>
            </div>
            <div className="about-skill">
              <img className="tailwind" src={skilltailwind}></img>
              <h4>Tailwind</h4>
            </div>
            <div className="about-skill">
              <img className="node" src={skillnode}></img>
              <h4>Bootstrap</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
