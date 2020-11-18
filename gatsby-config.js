require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        path: `${__dirname}/src/assets/images`,
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
    // TODO: Remove achorlinks from here and related package
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     // larger negative number adds more space at the top of the page
    //     offset: -99,
    //   },
    // },

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
