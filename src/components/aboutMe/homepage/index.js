import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

const pageQuery = graphql`
  {
    content: graphCmsSourcePage(slug: { eq: "about-me" }) {
      body
      images {
        id
        localFile {
          url
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const AboutMe = ({ pageInfo: { title, body } }) => {
  const { content } = useStaticQuery(pageQuery);
  return (
    <div className="section-container">
      <h1 className="section-header">{title}</h1>
      <div className="chapter">
        <div className="text">
          <ReactMarkdown source={body} />
        </div>
        <div className="images">
          <Img
            fluid={content.images[1].localFile.childImageSharp.fluid}
            style={{ margin: "0 auto", maxWidth: "100%" }}
          />

          {/* <Img
            fluid={content.images[3].localFile.childImageSharp.fluid}
            style={{ margin: "0 auto", maxWidth: "100%" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
