import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import AboutMe from "components/AboutMe";
import Projects from "components/projects/homepage";
import Resume from "components/Resume";
import BrewerySection from "components/BrewerySection";

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
        description
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
      projects {
        id
        title
        slug
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
    gcms: { pages, siteSettings, projects },
  } = useStaticQuery(pageQuery);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>{siteSettings.siteTitle}</title>
      </Helmet>
      <Container>
        <div className="sections">
          <section>
            <Projects projects={projects} />
          </section>

          <section>
            <Resume
              pageInfo={pages.filter((page) => page.slug === "resume")[0]}
            />
          </section>

          <section>
            <AboutMe
              pageInfo={pages.filter((page) => page.slug === "about-me")[0]}
            />
          </section>

          <BrewerySection
            pageInfo={pages.filter((page) => page.slug === "the-brewery")[0]}
          />
        </div>

        <h2>placeholder</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>
            gatsby new [directory]
            https://github.com/colbyfayock/gatsby-starter-sass
          </code>
        </pre>
        <ul>
          <li>Just a list item to test. Can you see me?</li>
        </ul>

        <p className="gatsby-astronaut">
          <img
            src={siteSettings[0].profileImage.url}
            alt="Portrait of Dwaine Best"
          />
        </p>
        <p>Testing GraphCMS Conntection:</p>
        <div>
          {pages.map(({ slug, ...pages }) => (
            <Link key={slug} to={`/pages/${slug}`}>
              {pages.title}
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
