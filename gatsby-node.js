exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { pages, projects, articles, brews },
    },
  } = await graphql(`
    {
      gcms {
        pages(stage: PUBLISHED) {
          id
          slug
          description
        }
        projects(stage: PUBLISHED) {
          id
          slug
          title
          tags {
            id
            name
          }
        }
        brews(stage: PUBLISHED) {
          id
          title
          slug
          brewStage
          updatedAt
          whatsBrewing
        }
        articles(stage: PUBLISHED) {
          id
          slug
          title
          body
        }
      }
    }
  `);

  console.log('Node projects: ', pages)

  pages.forEach(({ id, slug }) =>
    createPage({
      path: `/pages/${slug}`,
      component: require.resolve("./src/templates/Page.js"),
      context: {
        id,
      },
    })
  );

  projects.forEach(({ id, slug }) =>
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve("./src/templates/Project.js"),
      context: {
        id,
      },
    })
  );

  articles.forEach(({ id, slug }) =>
    createPage({
      path: `/articles/${slug}`,
      component: require.resolve("./src/templates/Page.js"),
      context: {
        id,
      },
    })
  );

  brews.forEach(({ id, slug }) =>
    createPage({
      path: `/brews/${slug}`,
      component: require.resolve("./src/templates/Page.js"),
      context: {
        id,
      },
    })
  );
};
