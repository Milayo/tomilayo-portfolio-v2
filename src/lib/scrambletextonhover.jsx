"use client";

import { useRef } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleTextCursorEffect = ({ text, className }) => {
  const spansRef = useRef([]);

  const scrambleChar = (index, originalChar) => {
    let iterations = 0;
    const maxIterations = 10;
    const span = spansRef.current[index];

    if (!span) return;
    span.classList.add("text-green-500", "glitching");

    clearInterval(span.interval);

    span.interval = setInterval(() => {
      if (iterations >= maxIterations) {
        span.innerText = originalChar;
        span.classList.remove("text-green-500", "glitching");
        clearInterval(span.interval);
        return;
      }

      if (originalChar !== " ") {
        span.innerText =
          characters[Math.floor(Math.random() * characters.length)];
      }

      iterations++;
    }, 40);
  };

  return (
    <p className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (spansRef.current[index] = el)}
          onMouseEnter={() => scrambleChar(index, char)}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default ScrambleTextCursorEffect;
