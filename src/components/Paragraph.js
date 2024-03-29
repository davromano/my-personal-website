import React from "react";
import "/src/fonts/fonts.css";

const Paragraph = ({ children }) => {
  return (
    <div
      className="font-tt-norms font-light text-dark-minsk text-lg p-3 flex items-center md:w-3/5  w-5/6 text-left"
      style={{ fontFamily: 'tt-norms' }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Paragraph;
