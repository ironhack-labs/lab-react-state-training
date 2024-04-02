import { useState } from "react";
import noGlasses from "../assets/images/maxence.png";
import glasses from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [image, setImage] = useState(noGlasses);

  return (
    <img
      onClick={() =>
        image === glasses ? setImage(noGlasses) : setImage(glasses)
      }
      src={image}
      alt=""
    />
  );
};

export default ClickablePicture;
