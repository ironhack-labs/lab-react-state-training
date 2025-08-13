import picture from "../assets/images/maxence.png"
import pictureGlasses from "../assets/images/maxence-glasses.png"
import { useState } from "react";

function ClickablePicture() {
  const [imageIndex, setImageIndex] = useState(0)
  const handleClick = () => setImageIndex((imageIndex + 1) % 2);

  return (
    <div className="picture-container">
      <img src={imageIndex === 0 ? picture : pictureGlasses} alt="Cool profile picture" onClick={handleClick}/>
    </div>
  )
}
export default ClickablePicture