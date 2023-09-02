import React from "react";
import "/src/fonts/fonts.css";

const Summary = ({ children }) => {
  return (
    <div
      className="font-tt-norms font-light text-dark-minsk p-6 border-middle-minsk border rounded-lg bg-nav-mobile-minsk flex-col justify-center items-center md:w-3/5  w-5/6 text-center mt-4 mb-4"
      style={{ fontFamily: "tt-norms" }}
    >
      <p className="text-2xl font-bold mb-4">Key Takeaways</p>
    {children}
    </div>
  );
};

export default Summary;
