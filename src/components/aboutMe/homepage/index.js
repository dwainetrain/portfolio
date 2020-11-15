import React from "react";

import ReactMarkdown from "react-markdown";

const AboutMe = ({ pageInfo: { title, body, images } }) => {
  return (
    <div >
      <h1 className="section-header">{title}</h1>
      <div className="chapter">
        <div className="text">
          <ReactMarkdown source={body} />
        </div>
        <div className="images">
          <img src={images[1].url} alt="me" />
          <img src={images[0].url} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
