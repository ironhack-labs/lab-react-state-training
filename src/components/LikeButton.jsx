import { useState } from "react";

function LikeButton() {

  const [contador, functionContador] = useState(0)
  const [color, setColor] = useState("yellow");

  const colors = ["yellow", "red", "green", "blue", "orange", "purple"];


  const handleClickUp = () => {
    functionContador(contador + 1);

    setColor(colors[contador % colors.length]);
  }

  return (
    <div>
        <button onClick={handleClickUp} style={{backgroundColor: color}}><span>{contador}</span> Likes</button>
    </div>
    
  )
}

export default LikeButton