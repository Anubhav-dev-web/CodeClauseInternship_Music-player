// CoverImage.js
import React from "react";

const CoverImage = ({ cover, name, artist }) => (
  <div className="col-span-1">
    <img
      src={cover}
      alt={`${name} Cover`}
      className="w-full h-48 object-cover rounded-md"
    />
    <div className="mb-4">
      <p className="text-2xl mt-3 flex items-center justify-center">{name}</p>
      <p className="text-gray-500 text-xl flex items-center justify-center">
        {artist}
      </p>
    </div>
  </div>
);

export default CoverImage;
