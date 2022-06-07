import React from "react";
import { projects } from "../projects";

function Work() {
  const projectElements = projects.map(project => {
    return (
      <div className="project__project">
        <div className="project__project-info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div>
            <a href={project.github}>
              <button className="btn">
                <img alt="" src="./images/github.png"></img>
                View code
              </button>
            </a>
            <a href={project.link}>
              <button className="btn btn--primary">
                <span className="material-symbols-outlined">exit_to_app</span>
                Check it out
              </button>
            </a>
          </div>
        </div>

        <div className="project__project-img">
          <img alt={project.title} src={project.img}></img>
        </div>
      </div>
    );
  });

  return (
    <div className="projects container" id="work">
      <div className="projects__wrapper">
        <h1>Projects</h1>
        <p></p>
        {projectElements}
      </div>
    </div>
  );
}

export default Work;
