import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import useProjects from "../hooks/use-projects";

const SecondPage = () => {
  const projects = useProjects();

  console.log("Projects:", projects);

  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container>
        <h1>Page Two</h1>
        <p>Welcome to page 2</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
