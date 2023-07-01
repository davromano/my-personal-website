import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const sourcesToFilter = ['mlux','clothesline'];
  const selectedArticles = data.allMdx.nodes.filter(node => sourcesToFilter.includes(node.frontmatter.slug) && node.fields.source === 'articles');
  const selectedProjects = data.allMdx.nodes.filter(node => sourcesToFilter.includes(node.frontmatter.slug) && node.fields.source === 'projects');

  return (
    <Layout pageTitle="Home Page">
      <p>Hi, I'm Davide.</p>
      <p>
        I am a Digital Humanities student at EPFL, Switzerland. I am
        particularly interested in the intersection of user research and data
        science, as I believe that these two fields are closely linked and can
        be used together to drive informed decision-making.
      </p>
      <h2>Selected Projects</h2>
      {selectedProjects.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.excerpt}</p>
        </article>
      ))}
      {/*{selectedArticles.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/articles/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}*/}
      <p>Or have a look at all projects</p>
      <Link to="/articles" className="text-black">
        Heere
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx (sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        fields {
          source
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
