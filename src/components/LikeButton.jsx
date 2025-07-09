import { useState } from "react";

function LikeButton() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
    return(
    <>
       <p><button className="like-btn" onClick={increaseCounter}>{counter} Likes</button></p>
    </>
    )
}


export default LikeButton;