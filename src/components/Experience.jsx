import React from "react";
import experienceIcon from "../assets/experience.png";
import checkmark from "../assets/checkmark.png";

export default function Experience() {
  return (
    <div>
      <section id="experience">
        <p className="section__text__p1">Showcase My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Tailwind CSS</h3>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JQuery</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express JS</h3>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
