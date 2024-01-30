import { useState } from "react";

import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [image, setImage] = useState(image1);
  
  const onClickHandler = () => {
    setImage((prevState) => (prevState === image1 ? image2 : image1));
  };

  return <img onClick={onClickHandler} src={image} />;
}
