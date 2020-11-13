import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

// For the matching gradient effect between the header and the wrapper
// Takes scroll position and uses it to calculate background-position of gradient.
import { useScrollData } from "scroll-data-hook";
import MobileMenu from "./MobileMenu";

const Header = ({ settings: { siteTitle, subheading } }) => {
  // Get scroll position and wrapper height for gradient effect
  const { position } = useScrollData();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Get scroll position and set height of wrapper
    window.addEventListener("scroll", resizeHeaderOnScroll);
    const wrapperHeight = document.querySelector(".wrapper").clientHeight;
    setHeight(wrapperHeight);
    window.addEventListener("resize", handleResize);
  }, []);

  // Get width for Nav Breakpoint
  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  // For shrinking header
  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 50,
      headerEl = document.querySelector(".links");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  };

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
          {width <= 1024 ? <MobileMenu /> : null}
        </div>
        <span className="subheading">{subheading}</span>
      </div>
    </header>
  );
};

export default Header;
