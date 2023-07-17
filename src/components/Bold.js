import React from "react";
import "/src/fonts/fonts.css";

const List = ({ children }) => {
  return (
    <span className="font-bold text-red-highlight"
    >
      {children}
    </span>
  );
};

export default List;
