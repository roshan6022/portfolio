import React from "react";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src={email}
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:roshansingh6.022@gmail.com">
                roshansingh6.022@gmail.com
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <img src={linkedin} alt="LinkedIn icon" class="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/roshan-singh-084840322/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
