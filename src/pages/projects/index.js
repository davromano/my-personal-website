// src/pages/projects/index.jsx
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { all_tags } from "../../components/all_tags";
import ElementBox from "../../components/ElementBox";
import NumberSequence from "../../components/NumberSequence"; // Import the NumberSequence component

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.filter(
    (node) => node.fields.source === "projects"
  );
  const [selectedTags, setSelectedTags] = React.useState([]);

  const handleTagClick = (tag) => {
    console.log(selectedTags); // Print the updated selectedTags array

    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  const selectedProjects = projects.filter((node) =>
    selectedTags.every((tag) => node.frontmatter.tags.includes(tag))
  );

  return (
    <Layout pageTitle="Projects">
      <div className="text-dark-minsk w-4/5 items-center justify-center h-screen md:mt-14 mt-5">
        {/* Title with Number Sequence */}
        <div className="flex items-center mb-6">
          <NumberSequence count={projects.length} /> {/* NumberSequence Component */}
          <h1 style={{ fontFamily: "tt-norms" }} className="text-3xl md:text-4xl">
            Projects
          </h1>
        </div>

        {/* Only shows on larger screens */}
        <div className="md:mb-3 md:mt-0 mt-6 mb-6 lg:block hidden">
          <ul className="flex space-x-4">
            {all_tags.map((tag) => (
              <button
                key={tag}
                className={`border rounded-lg p-2 ${
                  selectedTags.includes(tag)
                    ? "bg-dark-minsk text-white-minsk"
                    : "bg-transparent border-middle-minsk hover:bg-middle-minsk hover:text-dark-minsk"
                } transition-all duration-300 ease-in-out`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </ul>
        </div>

        {/* Only shows on small screens */}
        <div className="md:mb-3 md:mt-0 mt-6 mb-8 justify-start lg:hidden ">
          <ul className="md:grid-rows-1 grid grid-cols-2 gap-x-2 gap-y-4">
            {all_tags.map((tag) => (
              <button
                key={tag}
                className={`border rounded-lg p-2 ${
                  selectedTags.includes(tag)
                    ? "bg-dark-minsk text-white-minsk"
                    : "bg-transparent border-middle-minsk"
                } transition-all duration-300 ease-in-out`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </ul>
        </div>

        <div className="border-t border-middle-minsk w-11/12 mb-6 mt-6"></div>

        {/* Projects List */}
        {selectedProjects.map((node) => (
          <ElementBox key={node.id} node={node} />
        ))}
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
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
