import React from "react";
import "./ClickablePicture.css";
import defaultImage from "../../assets/images/maxence.png";
import imageGlasses from "../../assets/images/maxence-glasses.png";
import { useState } from "react";

const ClickablePicture = () => {
  const [image, setImage] = useState(defaultImage);
  return (
    <div>
      <img
        onClick={() => {
          if (image === defaultImage) setImage(imageGlasses);
          else {
            setImage(defaultImage);
          }
        }}
        src={image}
        alt="portrait picture of Maxence"
      />
    </div>
  );
};

export default ClickablePicture;
