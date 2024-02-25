// VolumeControls.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const VolumeControls = ({ volume, onVolumeChange }) => (
  <div className="mt-4 flex items-center space-x-2">
    <FontAwesomeIcon icon={faVolumeUp} className="text-lg" />
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={onVolumeChange}
      className="w-full"
    />
  </div>
);

export default VolumeControls;
