// ### Bonus: Iteration 5 | `DiscoButton`

// In this iteration, you will continue building on
// the `LikeButton` component created in the previous iteration.

// Create a `DiscoButton` component that displays a button
//  with the initial text `"0 Likes"`. Same as with
//  the `LikeButton` component created earlier, with each click,
//  the number of Likes should increase.

// Additionally, the background color of the button should
// change with each click. You can use the following
// array
// of colors: `["purple", "blue", "green", "yellow", "orange", "red"]`

import React, { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      className="disco-button"
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
