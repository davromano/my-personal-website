import React from 'react';

const ProjectDetails = ({ pageContext }) => {
  const { slug, title, date, markdown } = pageContext;

  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Slug: {slug}</p>
      <p>Date: {date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
};

export default ProjectDetails;
