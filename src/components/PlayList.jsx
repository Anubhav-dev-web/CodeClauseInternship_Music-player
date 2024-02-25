// Playlist.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Playlist = ({ songs, onPlayPlaylist, onRemoveFromPlaylist }) => {
  return (
    <ul>
      {songs.map((song, index) => (
        <li key={song.id} className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <img
              src={song.cover}
              alt={`${song.name} Cover`}
              className="w-8 h-8 object-cover rounded-md"
            />
            <p onClick={() => onPlayPlaylist(index)} className="cursor-pointer">
              {song.name}
            </p>
          </div>
          <button
            onClick={() => onRemoveFromPlaylist(index)}
            className="hover:text-red-500"
            title="Remove from Playlist"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
