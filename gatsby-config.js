module.exports = {
  siteMetadata: {
    title: "Davide Romano",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/articles`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
  ],
};