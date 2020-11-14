import React from "react";

import ReactMarkdown from "react-markdown";

const AboutMe = ({ pageInfo: { slug, title, body } }) => {
  return (
    <div id="about-me">
      <h1 className="section-header">{title}</h1>
      <div className="content">
        <ReactMarkdown source={body} />
      </div>
    </div>
  );
};

export default AboutMe;
