require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Dwaine Best`,
    description:
      "Junior Front End Developer with a design and theatre background.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-anywhere",
            options: {
              staticDir: "static",
              createMarkup: ({
                src,
                srcSet,
                sizes,
                aspectRatio,
                alt,
                base64,
                presentationWidth,
              }) => {
                return `<custom-image src="${src}" srcset="${srcSet}" sizes="${sizes}" aspectratio="${aspectRatio}" alt="${alt}" base64="${base64}" presentationwidth="${presentationWidth}"></custom-image>`;
              },
              sharpMethod: "fluid",
              // Additional sharp image arguments: https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
              // maxWidth: 650,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GATSBY_GRAPHCMS_API,
        downloadLocalImages: true,
        typePrefix: "graphCMSSource_",
        buildMarkdownNodes: true,
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
