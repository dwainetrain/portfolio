import React from "react";

import ReactMarkdown from "react-markdown";

const Resume = ({ pageInfo: { slug, title, body } }) => {
  return (
    <div className="section-container">
      <h1 className="section-header">{title}</h1>
      <p>
        <ReactMarkdown source={body} linkTarget={"_blank"}/>
      </p>
    </div>
  );
};

export default Resume;
