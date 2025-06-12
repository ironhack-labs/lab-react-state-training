import { useState } from "react";
import pic1 from "../assets/images/maxence.png";
import pic2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picGlass, setpicGlass] = useState(false);

  const handleClick = () => {
    setpicGlass(!picGlass);
  };

  return (
    <img
      src={picGlass ? pic2 : pic1}
      alt="Maxence"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
