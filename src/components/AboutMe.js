import React from "react";

const AboutMe = ({pageInfo: { slug, title }}) => {

  return (
    <>
      <h1>{title}</h1>
      <p>Slug: {slug}</p>
    </>
  );
};

export default AboutMe;
