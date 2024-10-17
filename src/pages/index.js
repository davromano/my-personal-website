import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import ElementBox from "../components/ElementBox";

const IndexPage = ({ data }) => {
  const sourcesToFilter = ["xai", "ethical-guidance", "dataviz"];
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
          <div className="lg:mx-32 overflow-hidden ">
            {/* Only show h1 on larger screens */}
            <h1 className="font-bold w-120 hidden lg:block text-6xl mb-4 animate-slideUp">
              Hi, I'm Davide
            </h1>
            {/* Show text-xl on smaller screens */}
            <h1 className="font-bold text-4xl lg:hidden mt-6 animate-slideUp">
              Hi, I'm Davide
            </h1>
            <p className="lg:text-xl text-base mt-4 lg:mt-0 mb-3 animate-slideUp">
            I am a EPFL Digital Humanities master student currently working in AXA as LLM engineer / Data scientist intern.
            </p>
            <p className="lg:text-xl text-base mt-4 lg:mt-0 animate-slideUp">
               I am interested in designing and developing {" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                applications with large language models
              </span>{" "}
              and leveraging{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                 data analysis
              </span>
              {" "}and{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                visualization
              </span>
              {" "}to uncover actionable insights and stories.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:mt-12 mt-8">
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
          desc
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
