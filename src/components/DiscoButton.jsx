import React, { useState } from 'react';

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const increaseLikes = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={increaseLikes}
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
