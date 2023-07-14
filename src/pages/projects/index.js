import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import { all_tags } from "../../components/all_tags";
import ElementBox from "../../components/ElementBox";

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
      <div className="text-dark-minsk w-4/5 items-center h-screen mt-14">
        <h1 style={{ fontFamily: "tt-norms" }}>Projects</h1>
        <div className="mb-3">
          <ul className="flex space-x-4">
            {all_tags.map((tag) => (
              <button
                key={tag}
                className={`bg-transparent border border-middle-minsk rounded-lg p-2 ${
                  selectedTags.includes(tag)
                    ? "bg-[#2f296d] text-[#f1e8ea]"
                    : "hover:bg-middle-minsk hover:text-dark-minsk"
                } transition-all duration-300 ease-in-out`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </ul>
        </div>
        {selectedProjects.map((node) => (
          <ElementBox key={node.id} node={node} />
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
