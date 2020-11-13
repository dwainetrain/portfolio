import React from "react";

const AboutMe = ({pageInfo: { slug, title, body }}) => {

  return (
    <div id="about-me">
      <h1 className="section-header">{title}</h1>
      <p>Slug: {slug}</p>
      <p>{body}</p>
      <pre>{body}</pre>
    </div>
  );
};

export default AboutMe;
