import React from "react";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Nav = () => {
  return (
    <ul>
      <li><AnchorLink to="/#projects" title="Projects">Projects</AnchorLink></li>
      <li>Articles</li>
      <li><AnchorLink to="/#resume" title="My Resume">Resume</AnchorLink></li>
      <li>About Me</li>
      <li>
        <Link to="/the-brewery/" title="The Idea Brewery">Brewery</Link>
      </li>
    </ul>
  );
};

export default Nav;
