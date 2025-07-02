"use client";

import React from "react";
import FlipNumbers from "react-flip-numbers";

const FlipClockNumber = ({ value }) => {
  // Safe conversion: ensures it's always a string, even if undefined or null
  const safeValue =
    typeof value === "number" || typeof value === "string"
      ? String(value)
      : "00"; // fallback to "00" to prevent errors

  return (
    <div className="text-center">
      <FlipNumbers
        numbers={safeValue}
        height={40}
        width={30}
        color="#4ade80"
        background="transparent"
        play
        perspective={100}
      />
    </div>
  );
};

export default FlipClockNumber;
