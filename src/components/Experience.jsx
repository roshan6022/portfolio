import React from "react";
import experienceIcon from "../assets/experience.png";
import checkmark from "../assets/checkmark.png";

export default function Experience() {
  return (
    <div>
      <section id="experience">
        <p class="section__text__p1">Showcase My</p>
        <h1 class="title">Skills</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Tailwind CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JQuery</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" class="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" class="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
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
