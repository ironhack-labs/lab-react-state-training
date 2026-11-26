import { useState } from "react";

function Carousel ({images}) {
  const [index, setIndex] = useState(0)

  const incrementNumber = () => {
    setIndex((index + 1) % images.length)
  }

  const decrementNumber = () => {
    setIndex((index - 1 + images.length) % images.length)
    console.log(index)
  }



  return(
    <div>
      <button onClick={decrementNumber}>Left</button>
      <img src={images[index]}></img>
      <button onClick={incrementNumber}>Right</button>
    </div>
  )
}

export default Carousel