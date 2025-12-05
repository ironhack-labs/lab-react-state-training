import { useState } from "react";

function LikeButton({ colors }){
  

  const [likes, setLikes] = useState(0);
  const [bgColor, setBg] = useState("purple")

  const updatesLikes = () => {
    setLikes(likes + 1)
    if (colors) {
      const randomColor = Math.floor(Math.random() * colors.length);
      setBg(colors[randomColor]);
    }
  }

  return(
    <button className="btn text-light m-2" type="button" style={{background: bgColor}} onClick={updatesLikes}>{`${likes} Likes`}</button>
  );
}

export default LikeButton;