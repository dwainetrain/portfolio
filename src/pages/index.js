import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import AboutMe from "components/aboutMe/homepage/";
import Projects from "components/projects/homepage";
import Resume from "components/Resume";
// import BrewerySection from "components/BrewerySection";

// GraphCMS Connection
import { graphql, useStaticQuery } from "gatsby";

const pageQuery = graphql`
  {
    gcms {
      pages {
        id
        title
        slug
        body
        description
        images {
          id
          height
          width
          url
        }
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
        description
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
        <title>{siteSettings[0].siteTitle}</title>
        <meta name="description" content={siteSettings[0].subheading} />
        <html lang="en" />
      </Helmet>
      <Container>
        <div className="sections">
          <section id="projects">
            <Projects projects={projects} />
          </section>
          <hr />
          <section   id="resume">
            <Resume
              pageInfo={pages.filter((page) => page.slug === "resume")[0]}
            />
          </section>
          <hr />
          <section id="about-me">
            <AboutMe
              pageInfo={pages.filter((page) => page.slug === "about-me")[0]}
            />
          </section>
          <hr />
          {/* <BrewerySection
            pageInfo={pages.filter((page) => page.slug === "the-brewery")[0]}
          /> */}
        </div>
        
      </Container>
    </Layout>
  );
};

export default IndexPage;
