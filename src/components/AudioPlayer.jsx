// AudioPlayer.js
import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ src, onEnd, onTimeUpdate }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [onTimeUpdate]);

  return (
    <audio ref={audioRef} preload="auto" src={src} onEnded={onEnd}></audio>
  );
};

export default AudioPlayer;
