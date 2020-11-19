import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

import ReactMarkdown from "react-markdown";
import CodeBlock from "components/CodeBlock";

const Project = ({
  data: {
    gcms: { project },
  },
}) => {
  return (
    <Layout pageName="project">
      <div className="project">
        <h1>{project.title}</h1>
        <ReactMarkdown source={project.body} renderers={{ code: CodeBlock }} />
      </div>
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
