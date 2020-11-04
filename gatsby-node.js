exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { pages },
    },
  } = await graphql(`
    {
      gcms {
        pages(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `);


  pages.forEach(({ id, slug }) =>
    createPage({
      path: `/pages/${slug}`,
      component: require.resolve("./src/templates/Page.js"),
      context: {
        id,
      },
    })
  );
};
