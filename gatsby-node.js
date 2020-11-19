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
          title
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
          title
          slug
          body
        }
      }
    }
  `);

  console.log('Node articles: ', articles)

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
      component: require.resolve("./src/templates/Article.js"),
      context: {
        id,
      },
    })
  );

  brews.forEach(({ id, slug }) =>
    createPage({
      path: `/brews/${slug}`,
      component: require.resolve("./src/templates/Brew.js"),
      context: {
        id,
      },
    })
  );
};

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
