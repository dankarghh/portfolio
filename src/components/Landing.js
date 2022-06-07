import React from "react";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="container landing__container">
        <div className="landing__content">
          <p>Hi, my name is</p>
          <h1 className="landing__content-heading">Brendan Coutts.</h1>
          <h1 className="landing__content-heading landing__content-heading--secondary">
            Front End Developer.
          </h1>
          <p>
            I have an obsession for all things front end. I like to build clean,
            beautiful, and intuitive user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
