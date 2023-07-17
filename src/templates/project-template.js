import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/mdxMapping";
import Seo from "../components/seo";

const ProjectDetails = ({ data, children }) => {
  const { title } = data.mdx.frontmatter;

  return (
    <Layout>
      <br />
      <h3
      className="  text-dark-minsk"
        style={{ fontFamily: "tt-norms", fontSize: "3.75rem" }}
      >
        {title}
      </h3>

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

export const Head = () => <Seo title="Project" />;

export default ProjectDetails;
