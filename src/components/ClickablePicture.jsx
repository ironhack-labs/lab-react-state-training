import { useState } from "react";
import picture1 from "../assets/images/maxence.png";
import picture2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isPictureOne, setIsPictureOne] = useState(true);

  const handleClick = () => {
    setIsPictureOne(!isPictureOne);
  };

  return (
    <img
      src={isPictureOne ? picture1 : picture2}
      alt="clickable"
      onClick={handleClick}
      style={{ width: "200px", cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
