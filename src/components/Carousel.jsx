import { useState } from "react";

function Carousel( {images}) {
    const [current, setCurrent] = useState(0)

    const decreaseNumber = () => {
        if(current === 0) return;
        else setCurrent(current - 1)
    };

     const increaseNumber = () => {
        if(current === images.length-1) return;
        else setCurrent(current + 1)
    };

  return (
    <div>
    <button onClick={decreaseNumber}>Left</button>
    <img src={`${images[current]}`} alt="" />
    <button onClick={increaseNumber}>Right</button>
    </div>
  )
}

export default Carousel