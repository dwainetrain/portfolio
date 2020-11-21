import React from "react";

import GithubSVG from "components/socialLinks/svgs/GithubSVG";
import LinkedinSVG from "components/socialLinks/svgs/LinkedinSVG";
import EmailSVG from "components/socialLinks/svgs/EmailSVG";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div>
        <a
          href="https://www.linkedin.com/in/dwainebest/"
          target="_blank"
          role="button"
          aria-label="LinkedIn Profile"
          rel="noreferrer"
        >
          <LinkedinSVG />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/dwainetrain"
          target="_blank"
          role="button"
          aria-label="Github Profile"
          rel="noreferrer"
        >
          <GithubSVG />
        </a>
      </div>
      <div>
        <a
          href="mailto:dwaine.best@gmail.com"
          target="_blank"
          role="button"
          aria-label="Email Contact"
          rel="noreferrer"
        >
          <EmailSVG />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
