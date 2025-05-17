import { useState } from "react";

function LikeButton() {
  const [likeButtonState, setLikeButtonState] = useState(0);
  const [likeButtonStateTwo, setLikeButtonStateTwo] = useState(0);
  const [colorButtonState, setColorButtonState] = useState(0);

  const arrayColors = ["purple", "blue", "green", "yellow", "orange", "red"];

  function handleLikeButton() {
    setLikeButtonState(likeButtonState + 1);
  }

  function handleBackgroundColor() {
    setColorButtonState((index) => {
      return (index + 1) % arrayColors.length;
    })
  }
  return (
    <div>
      <h3>Iteration 1</h3>

      <button
        onClick={handleLikeButton}
        style={{ border: "1px solid blue", marginRight: "10px" }}>
        {likeButtonState} Likes
      </button>

      <h3>Iteration 5</h3>

      <button
        onClick={() => {
          setLikeButtonStateTwo(likeButtonStateTwo + 1);
          handleBackgroundColor(likeButtonStateTwo)
        }}
        
        style={{
          backgroundColor: arrayColors[colorButtonState],
          color: "white",
        }} 
      >
        {likeButtonStateTwo} Likes
      </button>
    </div>
  );
}

export default LikeButton;
