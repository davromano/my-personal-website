import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import ElementBox from "../components/ElementBox";

const IndexPage = ({ data }) => {
  const sourcesToFilter = ["montrosa", "clothesline", "voice"];
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
        className="flex flex-col lg:flex-row text-dark-minsk mx-4 w-4/5 lg:w-full"
        style={{ fontFamily: "tt-norms", height: "calc(100vh - 4rem)" }}
      >
        <div className="lg:w-1/2 flex items-center justify-center lg:-mt-32">
          <div className="lg:mx-32">
            {/* Only show h1 on larger screens */}
            <h1 className="font-bold w-80 hidden lg:block">
              Hi, I'm Davide Romano
            </h1>
            {/* Show text-xl on smaller screens */}
            <h1 className="font-bold text-4xl lg:hidden mt-4">
              Hi, I'm Davide Romano
            </h1>
            <p className="lg:text-xl text-base mt-4 lg:mt-0">
              I am a Digital Humanities student at EPFL, Switzerland. I am
              particularly interested in the intersection of{" "}
              <span className="lg:font-bold font-normal text-red-highlight">
                user research
              </span>{" "}
              and{" "}
              <span className="lg:font-bold font-normal text-red-highlight">data science</span>
              , as I believe that these two fields are closely linked and can be
              used together to drive{" "}
              <span className="lg:font-bold font-normal text-red-highlight">
                informed decision making
              </span>
              .
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex-col justify-center lg:mt-32 mt-8">
          <div className=" flex-col my-auto">
            <h2 className="text-2xl mb-3">Selected Projects</h2>
            {selectedProjects.map((node) => (
              <ElementBox key={node.id} node={node} />
            ))}
            <Link
              to="/projects"
              className=" text-dark-minsk hover:text-clicked-minsk hover:underline pb-5"
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
