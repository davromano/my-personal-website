module.exports = {
  siteMetadata: {
    title: "Davide Romano",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/projects/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
        extensions: [`.md`, `.mdx`],
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
        extensions: [`.md`, `.mdx`],
      }
    },
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: `projects`, // this name will be added to the Mdx nodes
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
        extensions: [`.md`, `.mdx`],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    
  ],
};
