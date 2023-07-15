import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import ElementBox from "../components/ElementBox";

const IndexPage = ({ data }) => {
  const sourcesToFilter = ["venn", "clothesline", "voice"];
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
        style={{ fontFamily: "tt-norms", height: "calc(100vh - 4rem)" }}
      >
        <div className="w-1/2 flex items-center justify-center -mt-32">
          <div className="mx-32">
            <h1 className="font-bold w-64">Hi, I'm Davide Romano</h1>
            <p>
              I am a Digital Humanities student at EPFL, Switzerland. I am
              particularly interested in the intersection of{" "}
              <span className="font-bold text-red-highlight">
                user research
              </span>{" "}
              and{" "}
              <span className="font-bold text-red-highlight">data science</span>
              , as I believe that these two fields are closely linked and can be
              used together to drive{" "}
              <span className="font-bold text-red-highlight">
                informed decision making
              </span>
              .
            </p>
          </div>
        </div>
        <div className="w-1/2 flex-col justify-center mt-32">
          <div className=" flex-col my-auto">
            <h2 className="text-2xl mb-3">Selected Projects</h2>
            {selectedProjects.map((node) => (
              <ElementBox key={node.id} node={node} />
            ))}
            <Link
              to="/projects"
              className=" text-dark-minsk hover:text-clicked-minsk hover:underline"
            >
              Or have a look at all projects
            </Link>
          </div>
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
          tags
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