import React, { useState } from "react";
import { Link } from "gatsby";

const ElementBox = ({ node }) => {
  const { title, slug, tags } = node.frontmatter;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-transparent border-middle-minsk border rounded-lg p-4 space-y-4 mb-4 flex flex-col w-11/12 ${
        isHovered ? "bg-middle-minsk" : ""
    } transition duration-500 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl font-bold text-darkest-minsk font-tt-norms-pro self-start">
        <Link to={`/projects/${slug}`}>{title}</Link>
      </h2>
      <ul className="text-lg font-normal text-darkest-minsk font-tt-norms-pro flex space-x-8">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {isHovered && (
        <>
          <p className="flex space-x-2 text-sm">{node.excerpt}</p>
          <Link
            to={`/projects/${slug}`}
            className="relative bottom-2 right-2 text-dark-minsk font-bold px-2 py-1"
          >
            For more
          </Link>
        </>
      )}
    </div>
  );
};

export default ElementBox;
