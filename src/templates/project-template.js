import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby' 

const ProjectDetails = ({ data, children}) => {
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx

  return (
    <Layout>
      <h3>{title}</h3>
      <p>{children}</p>
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
