import { graphql } from 'gatsby';
import React from 'react';

const ArticleTemplate = ({ pageContext }) => {
  const { slug } = pageContext;

  return (
    <div>
      <h1>Article Template</h1>
      <h2>Slug: {slug}</h2>
      {/* Add your desired content here */}
    </div>
  );
};

export default ArticleTemplate;
