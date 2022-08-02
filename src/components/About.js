import React from "react";

function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="about " id="about">
        <div className="about__info">
          <p>
            Hello! I'm Brendan and I'm and aspiring front end developer. Having
            worked as a health professional for the past decade, I'm ready for a
            change! Since discovering web development in 2021, I've devoted my
            free time to mastering the art.
          </p>
          <p>
            Apart from working and coding, I have a side-hustle building
            electric guitars; a hobby that stemmed from my love of playing music
            and tinkering with gadgets. This is partly what lead me to pursue a
            career that more closely matches my problem solving skills and
            creativity. I'm now looking for my first dev position where I can
            take my programming skills to the next level and kick start my new
            career.
          </p>
        </div>
        <div className="about__img">
          <img src="./images/BCsquare.jpg" alt="profile"></img>
        </div>
      </div>
      <h2 className="about__stack-heading">Technologies I've worked with: </h2>
      <div className="about__stack">
        <span className="about__stack-item">
          <img title="React" src="./images/react-icon.png" alt="react icon" />
        </span>
        <span className="about__stack-item">
          <img
            title="Javascript"
            src="./images/javascript-icon.png"
            alt="javascript icon"
          />
        </span>
        <span className="about__stack-item">
          <img title="HTML5" src="./images/html-icon.png" alt="html icon" />
        </span>
        <span className="about__stack-item">
          <img title="CSS3" src="./images/css-icon.png" alt="css 3 icon" />
        </span>
        <span className="about__stack-item">
          <img
            title="Typescript"
            src="./images/typescript-icon.png"
            alt="typescript icon"
          />
        </span>
        <span className="about__stack-item">
          <img
            title="Firebase"
            src="./images/firebase-icon.png"
            alt="firebase icon"
          />
        </span>
        <span className="about__stack-item">
          <img
            title="Github"
            src="./images/github-icon.png"
            alt="github icon"
          />
        </span>
      </div>
    </div>
  );
}

export default About;
