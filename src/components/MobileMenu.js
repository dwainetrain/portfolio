import React, { useState } from "react";

import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

import Scrollspy from "react-scrollspy";

import Chevron from "../components/Chevron";
import Hamburger from "../components/Hamburger";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Scrollspy
      className="mobile-menu"
      items={["projects", "resume", "about-me"]}
      currentClassName="active"
      offset={-160}
    >
      <button onClick={() => handleClick()}>
        <Hamburger />
      </button>
      {open ? (
        <div
          className="overlay"
          onClick={() => handleClick()}
          onKeyDown={() => handleClick()}
          role="button"
          tabindex="-1"
          aria-label="page overlay"
        ></div>
      ) : null}
      <div className={`sidebar ${open ? "open" : null}`}>
        <div className="top">
          <h2>Menu</h2>
          <button
            onClick={() => handleClick()}
            aria-label="Sidebar menu toggle"
          >
            <Chevron />
          </button>
        </div>
        <ul>
          <li>
            <Link to="/#projects" title="Projects" onClick={() => handleClick()}>
              Projects
            </Link>
          </li>
          {/* <li>
            <Link to="/#articles" title="Articles">
              Articles
            </Link>
          </li> */}
          <li>
            <Link to="/#resume" title="My Resume" onClick={() => handleClick()}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/#about-me" title="About Me" onClick={() => handleClick()}>
              About Me
            </Link>
          </li>
          {/* <li>
            <Link to="/the-brewery/" title="The Idea Brewery" >
              Brewery
            </Link>
          </li> */}
        </ul>
      </div>
    </Scrollspy>
  );
};

export default MobileMenu;
