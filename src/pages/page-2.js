import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

// GraphCMS Connection
import { graphql, useStaticQuery } from "gatsby";

const pageQuery = graphql`
  {
    gcms {
      siteSettings {
        id
        profileImage {
          id
          url
          width
          height
        }
        subheading
        siteTitle
      }
    }
  }
`;


const SecondPage = () => {
  const {
    gcms: { siteSettings },
  } = useStaticQuery(pageQuery);

  console.log(siteSettings);
  
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
