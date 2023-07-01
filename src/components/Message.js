import React from 'react';
import "/src/fonts/fonts.css";

const Message = ({ children }) => {
  return (
    <div className="font-tt-norms font-bold bg-yellow-200 p-4" style={{ fontFamily: 'tt-norms' }}>
      {children}
    </div>
  );
};

export default Message;
