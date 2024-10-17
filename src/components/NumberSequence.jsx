// src/components/NumberSequence.jsx
import React, { useEffect, useState } from "react";

const NumberSequence = ({ count }) => {
  const [current, setCurrent] = useState(1); // Current number to display
  const [visible, setVisible] = useState(true); // Controls opacity for fade-in and fade-out
  const [isPaused, setIsPaused] = useState(false); // State to handle pause

  useEffect(() => {
    if (current > count) return; // Stop if current exceeds count

    if (current < count && !isPaused) {
      // Calculate progress (0 to 1)
      const progress = current / count;
      const opposite = 1 - progress;

      // Calculate delay: starts at 50ms, increases to 300ms as progress increases
      const minDelay = 20; // ms
      const sum = 300; // ms
      const maxDelay = 1000; // ms
      const delay = Math.min(minDelay + sum * Math.pow(progress, 2), maxDelay);
      const fadeout=100*opposite;

      // Fade out after the calculated delay
      const fadeOutTimeout = setTimeout(() => {
        setVisible(false); // Trigger fade-out

        // After fade-out duration, increment number and fade in
        const fadeInTimeout = setTimeout(() => {
          setCurrent((prev) => prev + 1);
          setVisible(true); // Trigger fade-in
        }, 0); // Duration of fade-out transition (200ms)

        return () => clearTimeout(fadeInTimeout);
      }, delay);

      return () => clearTimeout(fadeOutTimeout);
    }
  }, [current, count, isPaused]);

  if (count === 0) return null; // Do not render if there are no projects

  return (
    <div
      className="mr-4"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span
        style={{
          transition: "opacity 200ms ease-in-out", // Fixed transition duration
        }}
        className={`text-3xl md:text-3xl font-bold ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {current}
      </span>
    </div>
  );
};

export default NumberSequence;
