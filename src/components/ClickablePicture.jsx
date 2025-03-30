import { useState } from "react";
import defaultImg from "../assets/images/maxence.png";
import clickedImg from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? clickedImg : defaultImg}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;