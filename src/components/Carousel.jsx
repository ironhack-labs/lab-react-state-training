import { useState } from "react";

function Carousel({ images }) {
  const [count, setCount] = useState(0)
  
  const handleCountUp = () => {
    if (count === images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  const handleCountDown = () => {
    if(count === 0) {
      setCount(images.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  return (
      <div className=" d-flex gap-2 align-items-baseline">
        <button className="btn btn-primary" type="button" onClick={handleCountDown}>Left</button>
          <img src={images[count]} alt="" />
        <button className="btn btn-primary" type="button" onClick={handleCountUp}>Right</button>
      </div>
  )
}

export default Carousel;