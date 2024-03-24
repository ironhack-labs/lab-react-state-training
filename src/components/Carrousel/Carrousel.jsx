// import React, { useState } from "react";

// function Carrousel(props) {
//     const [url, setUrl]= useState(Math.floor(Math.random() * (props.images.length - 1)))
//   function handleLeft (){
//       setUrl()
//   }
//   return (
//     <div>
//       <img src={url} alt="" />
//       <button onClick={handleLeft}>left</button>
//       <button>right</button>
//     </div>
//   );
// }

// export default Carrousel;
import { useState } from "react";

function Carrousel(props) {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * props.images.length)
  );

  function handleLeft() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  }

  function handleRight() {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div>
      <img src={props.images[currentIndex]} alt="" />
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>right</button>
    </div>
  );
}

export default Carrousel;
