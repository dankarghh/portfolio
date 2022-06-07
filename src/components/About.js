import React from "react";

function About() {
  return (
    <div className="about container" id="about">
      <div className="about__info">
        <h1>About Me</h1>
        <p>
          Hello! I'm Brendan and I'm and aspiring front end developer. Having
          worked as a health professional for the past decade, I'm ready for a
          change! Since discovering web development in 2021, I've devoted my
          free time to mastering the art.
        </p>
        <p>
          I have always been passionate about my hobbies. Be it playing in
          bands, music production, woodworking, or running small custom guitar
          business. I want to excel. I'm now looking for my first dev position
          where I can take my programming skills to the next level and kickstart
          my new career.
        </p>
        <h2>Technologies I've worked with</h2>
      </div>
      <div className="about__img">
        <img src="./images/BCsquare.jpg" alt="profile"></img>
      </div>
      <div className="about__technologies"></div>
    </div>
  );
}

export default About;
