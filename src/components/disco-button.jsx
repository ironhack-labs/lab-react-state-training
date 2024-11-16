import React, { useState } from 'react';

const DiscoButton = () => {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cambiar al siguiente color en bucle
  };

  return (
    <div className="d-flex justify-content-center align-items-center border rounded p-3">
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {likes} Likes
    </button>
    </div>
  );
};

export default DiscoButton;
