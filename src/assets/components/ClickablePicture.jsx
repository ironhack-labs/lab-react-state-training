import img1 from "../images/maxence.png";
import img2 from "../images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [image, setImage] = useState(img1);

  return (
    <button onClick={() => (image === img1 ? setImage(img2) : setImage(img1))}>
      <img src={image} alt="photo of young man" />;
    </button>
  );
}

export default ClickablePicture;
