import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
import ElementBox from "../components/ElementBox"; // Original ElementBox for mobile
import ElementBox_test from "../components/ElementBox_homepage"; // New ElementBox_test for md+

const IndexPage = ({ data }) => {
  const sourcesToFilter = ["xai", "ethical-guidance", "mnlp", "dataviz"];
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

  // Split the selectedProjects into two columns for ElementBox_test
  const leftColumnProjects = [];
  const rightColumnProjects = [];

  selectedProjects.forEach((project, index) => {
    if (index % 2 === 0) {
      leftColumnProjects.push(project);
    } else {
      rightColumnProjects.push(project);
    }
  });

  return (
    <Layout pageTitle="Home Page">
      <div
        className="flex flex-col lg:flex-row text-dark-minsk mx-4 w-4/5 lg:w-full"
        style={{ fontFamily: "tt-norms" }}
      >
        <div className="lg:w-1/2 flex items-center justify-center lg:-mt-32 h-screen">
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
              I am a EPFL Digital Humanities master's student currently working
              for my master thesis at{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
              Thomson Reuters
              </span>{" "}on LLM training.
            </p>
            <p className="lg:text-xl text-base mt-4 lg:mt-0 animate-slideUp mb-5">
              I am interested in designing and developing{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                applications with large language models
              </span>{" "}
              and leveraging{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                data analysis
              </span>{" "}
              and{" "}
              <span className="lg:font-bold font-normal text-red-highlight animate-slideUp">
                visualization
              </span>{" "}
              to uncover actionable insights and stories.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl">Selected Projects</h2>
            <Link
              to="/projects"
              className="text-dark-minsk hover:text-clicked-minsk hover:underline"
            >
              Or have a look at all projects
            </Link>
          </div>

          <div className="block md:hidden">
            {selectedProjects.map((node) => (
              <ElementBox_test key={node.id} node={node} />
            ))}
          </div>

          {/* md and up: Two Columns with ElementBox_test */}
          <div className="hidden md:flex flex-row gap-6">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-3">
              {leftColumnProjects.map((node) => (
                <ElementBox_test key={node.id} node={node} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-3">
              {rightColumnProjects.map((node) => (
                <ElementBox_test key={node.id} node={node} />
              ))}
            </div>
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
          title
          slug
          tags
          desc
          date
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
