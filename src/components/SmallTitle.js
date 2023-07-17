import React from 'react';
import "/src/fonts/fonts.css";

const SmallTitle = ({ children }) => {
  return (
    <div className="font-tt-norms text-dark-minsk text-2xl p-4" style={{ fontFamily: 'tt-norms' }}>
      {children}
    </div>
  );
};

export default SmallTitle;
