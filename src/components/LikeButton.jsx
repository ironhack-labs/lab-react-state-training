import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

  return (
    <div>
      <button 
      onClick={() => {setLikes(likes + 1)
        setColorIndex((colorIndex + 1) % colors.length);
      }}
      style={{backgroundColor: colors[colorIndex],
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "8px",
        cursor: "pointer"
      }}
      >
        {likes} Likes
        </button>
    </div>
  );
}

export default LikeButton;
