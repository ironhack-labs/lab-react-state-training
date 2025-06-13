import { useState } from "react";
import { colors } from "../lib/colorsArray";
import Button from "../uiComponents/button";

const DiscoButton = () => {
  const [likeButton, setLikeButton] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const incrementHandler = () => {
    setLikeButton((prevLike) => prevLike + 1);
    setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
  };

  return (
    <>
      <Button
        onClick={incrementHandler}
        style={{ backgroundColor: colors[colorIndex] }}
        className="likeBtn"
      >
        {likeButton} Likes
      </Button>
    </>
  );
};
export default DiscoButton;
