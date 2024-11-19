import React, { useState } from 'react';

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);


  const [colorIndex, setColorIndex] = useState(0);

 
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];


  const handleClick = () => {
    setLikes(likes + 1);

  
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
