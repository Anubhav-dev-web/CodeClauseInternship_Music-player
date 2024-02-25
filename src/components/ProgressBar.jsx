// ProgressBar.js
import React from "react";

const ProgressBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="range"
        value={value}
        max="100"
        onChange={onChange}
        className="w-full"
      />
    </div>
  );
};

export default ProgressBar;
