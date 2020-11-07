import React from "react";

const AboutMe = ({pageInfo: { slug, title }}) => {

  return (
    <div id="about-me">
      <h1>{title}</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default AboutMe;
