import { useState } from "react";

function DiscoBtn ()  {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
  let [number, setNumber] = useState(0)

  const handleNumber = () => {
    setNumber(number + 1)
  }
  const color = colors[number % colors.length]
  const btnStyle = {
    marginRight: 5,
    backgroundColor: color
  }

  return(
      <button style={btnStyle} onClick={handleNumber}>{number} Likes</button>
  )
}

export default DiscoBtn