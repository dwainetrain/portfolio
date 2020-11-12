import React from "react";

const AboutMe = ({pageInfo: { slug, title, body }}) => {

  return (
    <div id="about-me">
      <h1>{title}</h1>
      <p>Slug: {slug}</p>
      <p>{body}</p>
    </div>
  );
};

export default AboutMe;
