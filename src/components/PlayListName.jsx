// PlaylistName.js
import React from "react";

const PlaylistName = ({
  name,
  isEditing,
  onNameChange,
  onStartEditing,
  onFinishEditing,
}) => (
  <div>
    <h2
      className="text-xl font-semibold mb-2 cursor-pointer"
      onClick={onStartEditing}
    >
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          onBlur={onFinishEditing}
          autoFocus
        />
      ) : (
        name
      )}
    </h2>
  </div>
);

export default PlaylistName;
