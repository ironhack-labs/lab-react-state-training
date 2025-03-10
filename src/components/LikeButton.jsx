import  { useState } from "react";


const colors = ["purple", "blue", "green", "yellow", "orange", "red"];


const LikeButton = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  //discobonus
  const [color, setcolor] = useState(0);


  const handleClick = () => {
    setLikeCounter(likeCounter + 1);

    //handle color on click 
    setcolor((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: colors[color] }}>
      {likeCounter} Likes
    </button>
  );
};

export default LikeButton;