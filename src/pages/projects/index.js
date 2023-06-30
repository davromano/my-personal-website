import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.filter(node => node.fields.source === 'projects')

  return (
    <Layout pageTitle="Projects">
      <h1>Projects</h1>
      {projects.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.excerpt}</p>
        </article>
      ))}
      
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        fields {
          source
        }
        frontmatter {
          title
          slug
        }
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
