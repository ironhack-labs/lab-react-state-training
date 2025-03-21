import { useState } from "react";

export function DiscoButton({randomNr}) {
  const [like, setLike] = useState(0);
  const [buttonColor, setButtonColor] = useState({})
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  
  const changeColor = () => {
    setButtonColor({
      backgroundColor: colors[randomNr(6)]
    })
  };

  const giveLike = () => {
    setLike(like + 1);

  };

  const clickButton = () => {
    giveLike();
    changeColor();
  }




  return <button style={buttonColor} onClick={clickButton}>{like} Likes</button>;
}
