import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

// For the matching gradient effect between the header and the wrapper
// Takes scroll position and uses it to calculate background-position of gradient.
import { useScrollData } from "scroll-data-hook";
import MobileMenu from "../../MobileMenu";
import SocialLinks from "components/socialLinks/desktop";

const Header = ({ settings: { siteTitle, subheading } }) => {
  // Get scroll position and wrapper height for gradient effect
  const { position } = useScrollData();
  const [height, setHeight] = useState(0);

  // Observe wrapper height to maintain gradient effect.
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(document.querySelector(".wrapper"));
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
        </div>
        <span className="subheading">{subheading}</span>
        <div className="socialLinks">
          <SocialLinks />
        </div>
        <div className="mobileMenu">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
