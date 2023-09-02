import React from 'react';
import "/src/fonts/fonts.css";

const List = ({ children }) => {
  return (
    <div className="font-tt-norms font-normal text-dark-minsk text-lg text-left" style={{ fontFamily: 'tt-norms' }}>
      {children}
    </div>
  );
};

export default List;
