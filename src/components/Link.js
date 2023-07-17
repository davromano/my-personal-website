import React from "react";
import "/src/fonts/fonts.css";

const List = ({ children }) => {
  return (
    <u
      className="font-tt-norms font-normal text-normal text-left text-dark-minsk"
      style={{ fontFamily: "tt-norms" }}
    >
      {children}
    </u>
  );
};

export default List;
