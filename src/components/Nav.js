import React from "react";

import { Link } from "gatsby";

const Nav = () => {
  return (
    <ul>
      <li>Projects</li>
      <li>Articles</li>
      <li>Resume</li>
      <li>About Me</li>
      <li>
        <Link to="/the-brewery/">Brewery</Link>
      </li>
    </ul>
  );
};

export default Nav;
