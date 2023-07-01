import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import { all_tags } from "../../components/all_tags";

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.filter(
    (node) => node.fields.source === "projects"
  );
  const [selectedTags, setSelectedTags] = React.useState([]);
  return (
    <Layout pageTitle="Projects">
      <div className="text-dark-minsk">
        <h1 style={{ fontFamily: "tt-norms" }}>Projects</h1>
        <ul>
          {all_tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {projects.map((node) => (
          <article key={node.id} style={{ fontFamily: "tt-norms" }}>
            <h2>
              <Link
                to={`/projects/${node.frontmatter.slug}`}
                className=" text-2xl"
              >
                {node.frontmatter.title}
              </Link>
            </h2>
            <ul>
              {node.frontmatter.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </div>
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
          tags
        }
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
