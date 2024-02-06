import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [pic, setPic] = useState(img1);

  const togglePic = (event) => {
    setPic(pic === img1 ? img2 : img1);
  };

  return (
    <div>
      <img src={pic} onClick={togglePic} />
    </div>
  );
}

export default ClickablePicture;
