import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

// For the matching gradient effect between the header and the wrapper
// Takes scroll position and uses it to calculate background-position of gradient.
import { useScrollData } from "scroll-data-hook";
import MobileMenu from "../../MobileMenu";

const Header = ({ settings: { siteTitle, subheading } }) => {
  // Get scroll position and wrapper height for gradient effect
  const { position } = useScrollData();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const wrapperHeight = document.querySelector(".wrapper").clientHeight;
    setHeight(wrapperHeight);
  }, []);


  return (
    <header
      style={{
        backgroundPosition: `0px -${position.y - 100}px`,
        backgroundSize: `100% ${height}px`,
      }}
    >
      <div className="links">
        <div className="heading">
          <div className="logo">
            <Link to="/">{siteTitle}</Link>
          </div>
          <MobileMenu />
        </div>
        <span className="subheading">{subheading}</span>
      </div>
    </header>
  );
};

export default Header;
