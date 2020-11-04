import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

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
      page(where: {slug: "about-me"}) {
        title
        body
      }
      projects {
        title
        tags {
          id
          name
        }
      }
    }
  }
`;

const IndexPage = () => {
  const {
    gcms: { pages },
  } = useStaticQuery(pageQuery);

  const {
    gcms: { siteSettings: [{siteTitle, subheading, profileImage:{url}}] },
  } = useStaticQuery(pageQuery);

  const {
    gcms: { page: {title, body} },
  } = useStaticQuery(pageQuery);

  const {
    gcms: { projects },
  } = useStaticQuery(pageQuery);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Title</title>
      </Helmet>
      <Container>
        <p className="gatsby-astronaut">
          <img src={url} alt="Portrait of Dwaine Best" />
        </p>
        <p>Testing GraphCMS Conntection:</p>
        <div>
          {pages.map(({ slug, ...pages }) => (
            <Link key={slug} to={`/pages/${slug}`}>
              {pages.title}
            </Link>
          ))}
        </div>
        <h1>{siteTitle}</h1>

        <p>Projects:</p>
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/`}>
          {project.title}
        </Link>
        ))}

        <p>{subheading}</p>
        <p>{title}</p>
        <h2>{body}</h2>
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
