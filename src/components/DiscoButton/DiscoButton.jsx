import React, { useState } from 'react'

function DiscoButton() {

  const [increment, setIncrement] = useState(0);
  const incrementNumb = () => {
    setIncrement((numb) => numb + 1);
  }

  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [pos, setPos] = useState(0);

  function setPosColour() {
    return setPos((prevPos) => prevPos === colorsArray.length ? 0 : prevPos + 1);
  }

  return (
    <>
        <button onClick={ () => { incrementNumb(); setPosColour(); }} style={{backgroundColor: `${colorsArray[pos]}`}}>{ increment } Likes</button>
    </>
  )
}

export default DiscoButton