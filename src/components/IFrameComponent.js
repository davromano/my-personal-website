import React from 'react';

const IFrameComponent = ({ src, width, height }) => (
  <iframe src={src} width={width} height={height} style={{ border: 0 }} title="Plotly Chart"></iframe>
);

export default IFrameComponent;
