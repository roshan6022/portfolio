import React, { useState } from "react";

export default function HamNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      <nav id="hamburger-nav">
        <div className="logo">Roshan Singh</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <ul className="menu-links">
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
