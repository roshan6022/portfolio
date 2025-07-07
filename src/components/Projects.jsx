import React from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {/* Project One */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={projectOne} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/* Project Two */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src={projectTwo} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/* Project Three */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectThree}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/", "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
