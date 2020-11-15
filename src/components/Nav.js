import React from "react";

// import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Nav = () => {

  return (
    <div className="box">
      <ul className="nav">
        <li>
          <AnchorLink to="/#projects" title="Projects">
            Projects
          </AnchorLink>
        </li>
        {/* <li>
          <AnchorLink to="/#articles" title="Articles">
            Articles
          </AnchorLink>
        </li> */}
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
        {/* <li>
          <Link to="/the-brewery/" title="The Idea Brewery">
            Brewery
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
