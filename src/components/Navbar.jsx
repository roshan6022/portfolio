export default function Navbar() {
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Roshan Singh</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
