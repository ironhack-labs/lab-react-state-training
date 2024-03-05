// import "./LikeButton.css";
import { useState } from "react";

export const DiscoButton = () => {
  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [discoState, setDiscoState] = useState(0);

  const bgColor = backgroundColor;

  const incrementDiscoCounter = () => {
    setDiscoState(discoState + 1);
  };

  return (
    <button style={backgroundColor} onClick={incrementDiscoCounter}>
      {discoState} Likes
    </button>
  );
};
