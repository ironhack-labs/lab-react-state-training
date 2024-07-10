import image from "../assets/images/maxence.png";
import image1 from "../assets/images/maxence-glasses.png";
import { useState } from "react";
function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div>
      {isClicked ? <img src={image} alt="" /> : <img src={image1} alt="" />}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickablePicture;
