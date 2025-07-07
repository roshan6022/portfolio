import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume-example.pdf";

export default function Profile() {
  return (
    <div>
      <section id="profile">
        {/* Optional profile image section if needed
        <div className="section__pic-container">
          <img src="./assets/profile-pic.png" alt="Roshan Singh profile" />
        </div> 
        */}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Roshan Singh</h1>
          <p className="section__text__p2">Web Developer</p>

          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open(resume, "_blank")}
            >
              Download Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Contact Info
            </button>
          </div>

          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/roshan-singh-084840322/",
                  "_blank"
                )
              }
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/roshan6022", "_blank")
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
