const { readFileSync } = require('fs');
const path = require('path');

const articleTemplate = path.resolve('./src/templates/article-template.js');
const ProjectTemplate = path.resolve('./src/templates/project-template.js');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result  = await graphql(`
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
            internal {
              contentFilePath
            }
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
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // Create pages for articles
  result.data.articles.nodes.forEach(({ childMdx }) => {
    const { title, slug, date, body } = childMdx.frontmatter;

    actions.createPage({
      path: `/articles/${slug}`,
      component: `${articleTemplate}?__contentFilePath=${childMdx.internal.contentFilePath}`,
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

    actions.createPage({
      path: `/projects/${slug}`,
      component: `${ProjectTemplate}?__contentFilePath=${childMdx.internal.contentFilePath}`,
      context: {
        slug: slug,
      },
    });
  });
};
