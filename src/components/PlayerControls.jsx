// PlayerControls.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = ({
  isPlaying,
  onPlayPause,
  onSkipBackward,
  onSkipForward,
}) => (
  <div className="space-x-4 flex items-center justify-center">
    <button onClick={onSkipBackward} className="text-2xl">
      <FontAwesomeIcon icon={faStepBackward} />
    </button>
    <button onClick={onPlayPause} className="text-2xl">
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </button>
    <button onClick={onSkipForward} className="text-2xl">
      <FontAwesomeIcon icon={faStepForward} />
    </button>
  </div>
);

export default PlayerControls;
