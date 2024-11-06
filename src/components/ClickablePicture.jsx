import { useState } from "react";
import mainImage from "../assets/images/maxence.png";
import secondImage from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [image, setImage] = useState(mainImage);

  function ChangeImg() {
    if (image === mainImage) {
        return setImage(secondImage)
    } else if (image === secondImage){
       return setImage(mainImage)
    }
  }

  return (
    <div>
      <button onClick={ChangeImg}>
        <img src={image} alt="" />
      </button>
    </div>
  );
}

export default ClickablePicture;
