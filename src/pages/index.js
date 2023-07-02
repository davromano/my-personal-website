import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const sourcesToFilter = ["mlux", "clothesline"];
  const selectedArticles = data.allMdx.nodes.filter(
    (node) =>
      sourcesToFilter.includes(node.frontmatter.slug) &&
      node.fields.source === "articles"
  );
  const selectedProjects = data.allMdx.nodes.filter(
    (node) =>
      sourcesToFilter.includes(node.frontmatter.slug) &&
      node.fields.source === "projects"
  );

  return (
    <Layout pageTitle="Home Page">
      <div
        className="flex h-screen text-dark-minsk"
        style={{ fontFamily: "tt-norms" }}
      >
        <div className="w-1/2 items-center justify-center text-center">
          <h1 className=" font-bold">Hi, I'm Davide Romano</h1>
          <p>
            I am a Digital Humanities student at EPFL, Switzerland. I am
            particularly interested in the intersection of{" "}
            <span className="font-bold text-red-highlight">user research</span> and
            <span className="font-bold"> data science</span>, as I believe that
            these two fields are closely linked and can be used together to
            drive informed decision-making.
          </p>
        </div>
        <div className="w-1/2 items-center justify-center text-center">
          <h2 className=" text-2xl">Selected Projects</h2>
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
          <p>Or have a look at all projects</p>
          <Link to="/articles" className="text-black">
            Heere
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

{
  /*{selectedArticles.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/articles/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}*/
}
