import React from "react";

import { Link } from "gatsby";

import Scrollspy from "react-scrollspy";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import SocialLinks from "components/socialLinks/desktop";

const Nav = () => {
  return (
    <div className="navbar">
      <Scrollspy
        className="nav"
        items={["projects", "resume", "about-me"]}
        currentClassName="active"
        offset={-170}
      >
        <li>
          <Link to="/#projects" title="Projects">
            Projects
          </Link>
        </li>
        {/* <li>
          <AnchorLink to="/#articles" title="Articles">
            Articles
          </AnchorLink>
        </li> */}
        <li>
          <Link to="/#resume" title="My Resume">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/#about-me" title="About Me">
            About Me
          </Link>
        </li>
        {/* <li>
          <Link to="/the-brewery/" title="The Idea Brewery">
            Brewery
          </Link>
        </li> */}
      </Scrollspy>
      <SocialLinks />
    </div>
  );
};

export default Nav;
