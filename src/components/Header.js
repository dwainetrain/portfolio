import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

import Logo from 'components/Logo'

const Header = ({ settings: { siteTitle, subheading } }) => {
  return (
    <header>
      <Container>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="subheading">{subheading}</div>
      </Container>
    </header>
  );
};

export default Header;
