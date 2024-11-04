import LikeButton from './LikeButton';
import { useState } from "react";

const DiscoButton = () => {
  const [backColor, setBackColor] = useState(null);

  function randomColor(){
    let colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];
    let colorIdx = Math.floor(Math.random() * colorArr.length);

    setBackColor(colorArr[colorIdx]);
  }

  return (
    <div onClick={randomColor}>
        <LikeButton bgColor={backColor}/>
    </div>
  )
}

export default DiscoButton