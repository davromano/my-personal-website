import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby' 
import { MDXProvider } from '@mdx-js/react';
import components from "../components/mdxMapping";

const ProjectDetails = ({ data, children }) => {
  const { title } = data.mdx.frontmatter

  return (
    <Layout>
      <h3>{title}</h3>
      <MDXProvider components={components}>
      {children}
    </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default ProjectDetails;
