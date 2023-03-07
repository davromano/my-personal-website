module.exports = {
  siteMetadata: {
    title: "Davide's corner",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/articles`,
      }
    },
  ],
};