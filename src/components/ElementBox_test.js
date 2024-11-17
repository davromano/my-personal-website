import React, { useState } from "react";
import { Link } from "gatsby";

const ElementBox = ({ node }) => {
  const { title, slug, tags, thumb } = node.frontmatter;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-transparent border-middle-minsk border rounded-lg p-4 space-y-4 mb-4 shadow-sm 
        flex flex-col transition-all duration-300 
        w-full md:w-full 
        ${isHovered ? "md:h-64 h-fit" : "md:h-48 h-fit"}`}
      style={{ backgroundColor: isHovered ? "#c6beda" : "transparent" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl md:text-2xl font-bold text-darkest-minsk self-start">
        <Link to={`/projects/${slug}`}>{title}</Link>
      </h2>
      <ul className="text-base md:text-lg font-normal text-darkest-minsk flex space-x-8">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {isHovered && (
        <>
          <p className="flex space-x-2 text-sm">{node.frontmatter.desc}</p>
          <Link
            to={`/projects/${slug}`}
            className="relative bottom-2 right-2 text-dark-minsk font-bold px-2 pt-3"
          >
            For more
          </Link>
        </>
      )}
    </div>
  );
};

export default ElementBox;
