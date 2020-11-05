import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import useBrews from "../hooks/use-brews";

const SecondPage = () => {
const brews = useBrews();

  console.log("Brews:", brews);
  
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
