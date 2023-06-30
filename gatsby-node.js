const { readFileSync } = require('fs');
const { join } = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      articles: allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              slug
              date(formatString: "MMMM D, YYYY")
            }
            body
          }
        }
      }
      projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              slug
              date(formatString: "MMMM D, YYYY")
            }
            body
          }
        }
      }
    }
  `);

  // Create pages for articles
  result.data.articles.nodes.forEach(({ childMdx }) => {
    const { title, slug, date, body } = childMdx.frontmatter;

    createPage({
      path: `/articles/${slug}`,
      component: require.resolve('./src/templates/article-template.js'),
      context: {
        slug: slug,
        title: title,
        date: date,
        markdown: body,
      },
    });
  });

  // Create pages for projects
  result.data.projects.nodes.forEach(({ childMdx }) => {
    const { slug }= childMdx.frontmatter;

    createPage({
      path: `/projects/${slug}`,
      component: require.resolve('./src/templates/project-template.js'),
      context: {
        slug: slug,
      },
    });
  });
};
