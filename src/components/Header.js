import React, {  useState } from "react";
import { Link } from "react-scroll";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [showHeader, setShowHeader] = useState(true);


  return (
    <div className={showHeader ? "header" : "hidden"}>
      <div className="header__container">
        <ul className="header__links">
          <Link
            to="landing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li>About Me</li>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <li>Work</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
