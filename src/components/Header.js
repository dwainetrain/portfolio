import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

// For the matching gradient effect between the header and the wrapper
// Takes scroll position and uses it to calculate background-position of gradient.
import { useScrollData } from "scroll-data-hook";

const Header = ({ settings: { siteTitle, subheading } }) => {
  const { position } = useScrollData();

  return (
    <header
      style={{
        backgroundPosition: `0px -${position.y-100}px`,
      }}
    >
      <Container>
        <div className="logo">
          <Link to="/">{siteTitle}</Link>
        </div>
        <span className="subheading">{subheading}</span>
      </Container>
    </header>
  );
};

export default Header;
