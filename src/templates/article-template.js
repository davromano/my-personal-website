import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby' 

const ArticleTemplate = ({ data, children }) => {
  const { title, date} = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <Layout>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{children}</p>
    </Layout>
  );
};

export const query = graphql`
  query ArticlePage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default ArticleTemplate;
