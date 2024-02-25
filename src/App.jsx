// MusicPlayer.js
import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { chillHop, defaultData } from "./assets/data";
import CoverImage from "./components/CoverImage";
import PlayerControls from "./components/PlayerControls";
import VolumeControls from "./components/VolumeControls";
import ProgressBar from "./components/ProgressBar";
import PlaylistName from "./components/PlaylistName";
import Playlist from "./components/PlayList";
import SongList from "./components/SongList";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  const songs = chillHop;

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playlist, setPlaylist] = useState(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem("playlist"));
    return savedPlaylist || [];
  });
  const [playlistName, setPlaylistName] = useState(() => {
    const savedPlaylistName = localStorage.getItem("playlistName");
    return savedPlaylistName || "My Playlist";
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  const [togglePlaylist, setTogglePlaylist] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Save the updated playlist to local storage
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const onPlayPauseHandler = () => {
    if (!isPlaying) {
      setCurrentTime(audioRef.current.currentTime); // Store the current time when pausing
    } else {
      audioRef.current.currentTime = currentTime; // Set the currentTime to the stored time when resuming
      audioRef.current.play(); // Resume playback
    }

    setIsPlaying(!isPlaying); // Toggle the isPlaying state
  };

  useEffect(() => {
    audioRef.current.src = togglePlaylist
      ? playlist[currentSongIndex]?.audio
      : songs[currentSongIndex]?.audio;

    if (isPlaying) {
      audioRef.current.currentTime = currentTime ?? 0; // Use 0 if currentTime is undefined
      audioRef.current
        .play()
        .catch((error) => console.error("Failed to play audio:", error));
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, togglePlaylist, isPlaying, currentTime]);

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const startEditingName = () => {
    setIsEditingName(true);
  };

  const finishEditingName = () => {
    setIsEditingName(false);
    localStorage.setItem("playlistName", playlistName);
  };

  const onProgressChange = (e) => {
    const value = e.target.value;
    setSongProgress(value);
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (value * duration) / 100;
  };

  const timeUpdateHandler = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongProgress(animation);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", timeUpdateHandler);
      return () => {
        audioRef.current.removeEventListener("timeupdate", timeUpdateHandler);
      };
    }
  }, [audioRef]);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-[#7E2553] grid grid-cols-2 gap-4 mt-20 rounded-xl">
      <div className="col-span-2 h-62">
        <CoverImage
          cover={
            togglePlaylist && playlist.length > 0
              ? playlist[currentSongIndex]?.cover
              : !togglePlaylist
              ? songs[currentSongIndex]?.cover
              : defaultData[0].cover
          }
          name={
            togglePlaylist && playlist.length > 0
              ? playlist[currentSongIndex]?.name
              : !togglePlaylist
              ? songs[currentSongIndex]?.name
              : defaultData[0].name
          }
          artist={
            togglePlaylist && playlist.length > 0
              ? playlist[currentSongIndex]?.artist
              : !togglePlaylist
              ? songs[currentSongIndex]?.artist
              : defaultData[0].artist
          }
        />
      </div>

      <div className="col-span-2">
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={onPlayPauseHandler}
          onSkipBackward={() =>
            setCurrentSongIndex(
              (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
            )
          }
          onSkipForward={() =>
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
          }
        />

        <VolumeControls
          volume={volume}
          onVolumeChange={(e) => setVolume(parseFloat(e.target.value))}
        />

        <ProgressBar value={songProgress} onChange={onProgressChange} />

        <AudioPlayer
          src={
            togglePlaylist
              ? playlist[currentSongIndex]?.audio
              : songs[currentSongIndex]?.audio
          }
          onEnd={() =>
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
          }
          onTimeUpdate={timeUpdateHandler}
        />
      </div>

      <div className="col-span-1">
        <SongList
          songs={songs}
          onPlaySong={(index) => {
            setTogglePlaylist(false);
            setCurrentSongIndex(index);
            setIsPlaying(true);
          }}
          onAddToPlaylist={(song) =>
            setPlaylist((prevPlaylist) => [...prevPlaylist, song])
          }
        />
      </div>

      <div className="col-span-1 mt-4">
        <PlaylistName
          name={playlistName}
          isEditing={isEditingName}
          onNameChange={handlePlaylistNameChange}
          onStartEditing={startEditingName}
          onFinishEditing={finishEditingName}
        />

        {playlist.length > 0 && (
          <Playlist
            songs={playlist}
            onPlayPlaylist={(index) => {
              setTogglePlaylist(true);
              setCurrentSongIndex(index);
              setIsPlaying(true);
            }}
            onRemoveFromPlaylist={(index) => {
              const newPlaylist = [...playlist];
              newPlaylist.splice(index, 1);
              setPlaylist(newPlaylist);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
