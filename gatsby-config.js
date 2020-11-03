require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcms",
        url: process.env.GATSBY_GRAPHCMS_API,
      },
    },
  ],
};
