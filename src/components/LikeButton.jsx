import  { useState } from "react";

function LikeButton() {
  // Step 1: Create a state variable for the like counts for each button
  const [likes, setLikes] = useState([0, 0]); // Each button gets its own like count

  // Step 2: Define a function to handle button clicks, accepting the index of the button
  const handleLikeClick = (index) => {
    const newLikes = [...likes]; // Make a copy of the likes array
    newLikes[index] = newLikes[index] + 1; // Increment the like count for the specific button
    setLikes(newLikes); // Update the state with the new array
  };

  return (
    <div>
      {/* Step 3: Render the buttons, each with its own like count */}
      <button onClick={() => handleLikeClick(0)}
        style={{
          backgroundColor: "blueviolet",
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
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>
        {likes[0]} Likes
      </button>
      <button onClick={() => handleLikeClick(1)}style={{
          backgroundColor: "green",
          cursor: "pointer",
          border: "none",
          borderRadius: "12px",
          padding: "15px 30px",
          margin: "40px",
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          transition: "background-color 0.5s ease, transform 0.2s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}> 
        {likes[1]} Likes
      </button>
    </div>
  );
}

export default LikeButton;
