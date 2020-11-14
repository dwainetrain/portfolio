import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

import ReactMarkdown from "react-markdown";

// Prism setup
import { useEffect } from "react";

//import the Prism package
import Prism from "prismjs";

const Project = ({
  data: {
    gcms: { project },
  },
}) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });

  return (
    <Layout pageName="project">
      <h1>{project.title}</h1>
      <ReactMarkdown source={project.body} />
    </Layout>
  );
};

export const PageQuery = graphql`
  query ProjectQuery($id: ID!) {
    gcms {
      project(where: { id: $id }) {
        title
        body
      }
    }
  }
`;

export default Project;
