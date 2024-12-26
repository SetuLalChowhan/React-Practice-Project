import React from "react";

const Progress = ({ totalSteps, step }) => {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress">
      <div
        className="progress"
        style={{
          height: "4px",
          background: "#437663",
          width: `${progress}%`,
          transition: "all 0.4s ease-in",
        }}
      ></div>
    </div>
  );
};

export default Progress;
