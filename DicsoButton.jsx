import React, { useState } from 'react';

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const currentColor = colors[likes % colors.length];

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: currentColor,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
};

export default DiscoButton;
