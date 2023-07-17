module.exports = {
  siteMetadata: {
    title: "Davide Romano",
    description: `Portfolio website of Davide Romano, Digital Humanities student at EPFL`,
  },
  plugins: [
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
        name: `images-projects`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    `gatsby-plugin-mdx-source-name`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
              quality: 50,
              withWebp: true,
            },
          },
        ],
      },
    },
    
  ],
};
