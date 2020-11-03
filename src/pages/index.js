import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/gatsby-astronaut.png";

// GraphCMS Connection
import { graphql, useStaticQuery, Link } from "gatsby";

const pageQuery = graphql`
  {
    gcms {
      pages {
        id
        title
        slug
        body
      }
    }
  }
`;

const IndexPage = () => {
  const {
    gcms: { pages },
  } = useStaticQuery(pageQuery);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p>
        <p>Testing GraphCMS Conntection:</p>
        <div>
          {pages.map(({slug, ...pages}) => (
            <Link key={slug} to={`/pages/${slug}`}>
              {pages.title}
            </Link>
          ))}
        </div>
        <h1>Gatsby Sass Starter</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>
            gatsby new [directory]
            https://github.com/colbyfayock/gatsby-starter-sass
          </code>
        </pre>
      </Container>
    </Layout>
  );
};

export default IndexPage;
