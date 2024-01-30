import { useState } from "react";
import imgWithout from "../assets/images/maxence.png";
import imgWith from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [pictureVisible, setPictureVisible] = useState(imgWithout);
  const togglePicture = () => {
    if (pictureVisible === imgWithout) {
      setPictureVisible(imgWith);
    } else {
      setPictureVisible(imgWithout);
    }
  };
  return (
    <div className="picture">
      <img src={pictureVisible} alt="clickable-pic" onClick={togglePicture} />
    </div>
  );
}
