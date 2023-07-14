import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/mdxMapping";

const ProjectDetails = ({ data, children }) => {
  const { title } = data.mdx.frontmatter;

  return (
    <Layout>
      <br/>
      <h3 className=" text-2xl" style={{ fontFamily: 'tt-norms' }}>{title}</h3>
        <MDXProvider components={components}>{children}</MDXProvider>
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
