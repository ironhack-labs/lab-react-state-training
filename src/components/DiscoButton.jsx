import { useState } from "react"

function DiscoButton(){
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [color, setColor] = useState(colors[0])
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        const randomColor = Math.floor(Math.random() * colors.length);
        setColor(colors[randomColor])
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <button
          className="disco"
          onClick={handleClick}
          style={{ backgroundColor: color }}
        >
          {counter} Likes
        </button>
      );
}

export default DiscoButton