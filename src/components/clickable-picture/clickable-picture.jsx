import { useState } from "react";

function ClickablePicture({ img1, img2 }) {
    const [isImg1, setIsImg1] = useState(true);
  
    const toggleImage = () => {
      setIsImg1((prevState) => !prevState);
    };
  
    return (
      <img
        src={isImg1 ? img1 : img2}
        alt="toggle"
        onClick={toggleImage}
        style={{ cursor: "pointer" }}
      />
    );
  }
  
  export default ClickablePicture;