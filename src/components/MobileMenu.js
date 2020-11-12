import React, { useState } from "react";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Chevron from "../components/Chevron";
import Hamburger from "../components/Hamburger";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="mobile-menu">
      <Link to="#" onClick={() => handleClick()}>
        <Hamburger />
      </Link>
      {active ? (
        <div
          className="overlay"
          onClick={() => handleClick()}
          onKeyDown={() => handleClick()}
          role="button"
          tabindex="-1"
          aria-label="page overlay"
        ></div>
      ) : null}
      <div className={`sidebar ${active ? "active" : null}`}>
        <div className="top">
          <h2>Menu</h2>
          <Link
            to="#"
            onClick={() => handleClick()}
            aria-label="Sidebar menu toggle"
          >
            <Chevron />
          </Link>
        </div>
        {/* This is a hack since the onClick isn't working with the links in the list */}
        <ul>
          <li>
            <AnchorLink to="/#projects" title="Projects" >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#articles" title="Articles">
              Articles
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#resume" title="My Resume">
              Resume
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#about-me" title="About Me">
              About Me
            </AnchorLink>
          </li>
          <li>
            <Link to="/the-brewery/" title="The Idea Brewery" >
              Brewery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
