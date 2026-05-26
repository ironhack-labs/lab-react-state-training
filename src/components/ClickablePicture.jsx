import { useState } from "react";

function ClickablePicture() {
  const img1 = "/mnt/data/maxence-glasses.png";
  const img2 = "/assets/maxence-glasses.png"; // o cualquier otra imagen

  const [clicked, setClicked] = useState(false);

  const toggleImage = () => {
    setClicked(!clicked);
  };

  return (
    <img
      src={clicked ? img2 : img1}
      onClick={toggleImage}
      alt="clickable"
      style={{ width: "200px", cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
