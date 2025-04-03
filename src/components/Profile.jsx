import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Profile() {
  return (
    <div>
      <section id="profile">
        {/* <!-- <div class="section__pic-container">
      <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
    </div> --> */}
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Roshan Singh</h1>
          <p class="section__text__p2">Web Developer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('../assets/resume-example.pdf')"
            >
              Download Resume
            </button>
            <button
              class="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://www.linkedin.com/in/roshan-singh-084840322/'"
            />
            <img
              src={github}
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/roshan6022'"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
