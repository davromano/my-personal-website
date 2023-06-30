import React from 'react';

const ProjectDetails = ({ data }) => {
  const { slug, title, date, markdown } = data;

  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Slug: {slug}</p>
      <p>Date: {date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
};
export const query = graphql`

`
export default ProjectDetails;
