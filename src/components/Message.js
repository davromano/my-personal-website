import React from 'react';

const Message = ({ children }) => {
  return (
    <div className="font-bold bg-yellow-200 p-4">
      {children}
    </div>
  );
};

export default Message;
