import React from 'react';
import "/src/fonts/fonts.css";

const Titles = ({ children }) => {
  return (
    <div className="font-tt-norms font-bold text-dark-minsk text-3xl p-4 text-center w-11/12" style={{ fontFamily: 'tt-norms' }}>
      {children}
    </div>
  );
};

export default Titles;
