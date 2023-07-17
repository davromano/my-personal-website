import React from "react";
import "/src/fonts/fonts.css";

const Paragraph = ({ children }) => {
  return (
    <div
      className="font-tt-norms font-light text-dark-minsk text-base p-3 flex items-center w-3/5 text-left"
      style={{ fontFamily: 'tt-norms' }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Paragraph;
