// src/components/ElementBox_test.js
import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ElementBox_test = ({ node }) => {
  const { title, slug, tags, thumb } = node.frontmatter;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Safely retrieve the image data
  const image = thumb?.childImageSharp ? getImage(thumb.childImageSharp) : null;

  return (
    <div
      className={`bg-transparent border-middle-minsk border rounded-lg p-4 mb-4 shadow-sm 
        flex flex-col transition-all duration-500 
        w-full 
        overflow-hidden`}
      style={{
        backgroundColor: isHovered ? "#c6beda" : "transparent",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Thumbnail */}
      {image && (
        <GatsbyImage
          image={image}
          alt={`Thumbnail for ${title}`}
          className="rounded-md object-cover h-32 md:h-40 w-full flex-none"
        />
      )}

      {/* Project Title - Under Image */}
      <h2 className="text-base md:text-lg font-semibold text-darkest-minsk self-start mt-4">
        <Link to={`/projects/${slug}`}>{title}</Link>
      </h2>

      {/* Project Tags - Under Title */}
      <ul className="text-sm md:text-base font-normal text-darkest-minsk flex space-x-4">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* Additional Info on Hover */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden 
          ${isHovered ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm">{node.frontmatter.desc}</p>
        <Link
          to={`/projects/${slug}`}
          className="text-dark-minsk font-bold pt-5"
        >
          For more
        </Link>
      </div>
    </div>
  );
};

export default ElementBox_test;
