import  { useState } from 'react';

function DiscoButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const handleClick = () => {
    setLikes(likes + 1);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
