import React from "react";

const ProgressBar = ({ completion }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${completion}%` }}
      ></div><span>{`${completion}%`}</span>
    </div>
  );
};

export default ProgressBar;
