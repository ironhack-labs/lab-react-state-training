import { useState } from "react";

function DiscoButton() {
  // Step 1: Create a state variable for the like count and the background color
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  // Array of colors to cycle through
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  // Step 2: Define the function to handle button clicks
  const handleLikeClick = () => {
    // Increment the like count
    setLikes(likes + 1);

    // Cycle the background color
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
       <div>
      {/* Step 3: Render the button with the like count and dynamic background color */}
      <button
        onClick={handleLikeClick}
        style={{
          backgroundColor: colors[colorIndex],
          cursor: "pointer",
          border: "none",
          borderRadius: "12px",
          padding: "15px 30px",
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          transition: "background-color 0.5s ease, transform 0.2s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default DiscoButton;
