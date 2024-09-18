import { useState } from "react";

function DiscoButton() {

  let [contador, setContador] = useState(0) 
  let [color, setColor] = useState(null)

  const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]

  const handleIncrease = () => {
    setContador(contador + 1)
    setColor(colorsArr[Math.floor(Math.random() * colorsArr.length)])
  }

  // const handleColor = () => {
    
  // }

  return (
      <div className="buttons">
        <button style={{backgroundColor: color, width: "150px"}} onClick={handleIncrease}>{contador} Likes</button>
        {/* <button onClick={handleDecrease}>{contador} Likes</button> */}
      </div>
  );
}

export default DiscoButton;
