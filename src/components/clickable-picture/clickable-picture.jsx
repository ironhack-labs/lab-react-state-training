import React, { useState } from "react";
import maxenceGlasses from "../../assets/images/maxence-glasses.png";
import maxence from "../../assets/images/maxence.png";

function ClickablePicture({ className = "" }) {
  let [image, setImage] = useState(maxence);

  const changeImage = () => {
    image =
      image === maxenceGlasses ? setImage(maxence) : setImage(maxenceGlasses);
  };

  return (
    <div className="">
      <button className="clickable-button"
        onClick={() => changeImage()}
        style={{ backgroundImage: `url(${image})` }}
      ></button>
    </div>
  );
}

export default ClickablePicture;
