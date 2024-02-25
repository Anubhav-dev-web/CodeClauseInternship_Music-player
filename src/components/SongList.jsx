// SongList.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SongList = ({ songs, onPlaySong, onAddToPlaylist }) => (
  <div className="mt-4">
    <h2 className="text-xl font-semibold mb-2">All Songs</h2>
    <ul>
      {songs.map((song, index) => (
        <li key={index} className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <img
              src={song.cover}
              alt={`${song.name} Cover`}
              className="w-8 h-8 object-cover rounded-md"
            />
            <p onClick={() => onPlaySong(index)} className="cursor-pointer">
              {song.name}
            </p>
          </div>
          <button
            onClick={() => onAddToPlaylist(song)}
            className="hover:text-blue-500"
            title="Add to Playlist"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default SongList;
