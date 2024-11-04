import { useState } from "react";

const Carousel = ({images}) => {
  const [pageNo, setPageNo] = useState(0);

  function incrementPage(){
    setPageNo(prev => {
        prev = (prev + 1 < images.length) ? (prev + 1) : 0;
        return prev;
    });
  }

  function decrementPage(){
    setPageNo(prev => {
        prev = (prev - 1 >= 0) ? (prev - 1) : (images.length-1);
        return prev;
    });
  }


  return (
    <div className="carousel">
        <button className="lr-button" onClick={decrementPage}>Left</button>
        <img src={images[pageNo]} alt="Picture" />
        <button className="lr-button" onClick={incrementPage}>Right</button>
    </div>
  )
}

export default Carousel;