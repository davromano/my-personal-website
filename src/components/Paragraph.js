import React from "react";
import "/src/fonts/fonts.css";

const Paragraph = ({ children }) => {
  return (
    <div
      className="font-tt-norms font-light text-dark-minsk text-base p-4 flex items-center justify-center w-3/5"
      style={{ fontFamily: 'tt-norms' }}
    >
      {children}
    </div>
  );
};

export default Paragraph;
