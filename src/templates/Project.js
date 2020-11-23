import React from "react";
import { graphql } from "gatsby";
import Layout from "components/Layout";

import { Helmet } from "react-helmet"

import ReactMarkdown from "react-markdown";
import CodeBlock from "components/CodeBlock";

const Project = ({
  data: {
    gcms: { project },
  },
}) => {

  return (
    <Layout pageName="project">
       <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title} - Case Study</title>
          <meta name="description" content={project.description} />
          <html lang="en" />
        </Helmet>
      <div className="project">
        <h1>{project.title} <span className="designation">/ Project</span></h1>
        <ReactMarkdown source={project.body} renderers={{ code: CodeBlock }} linkTarget={"_blank"}/>
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
        description
      }
    }
  }
`;

export default Project;
