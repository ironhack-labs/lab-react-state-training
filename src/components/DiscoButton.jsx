import  { useState } from 'react';

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

export default function DiscoButton() {
  const [counter, setCounter] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: colors[colorIndex], color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {counter} Likes
      </button>
    </div>
  );
}
