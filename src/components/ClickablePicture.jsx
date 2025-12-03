import { useState } from "react";
import imgNormal from "../assets/images/maxence.png";
import imgClicked from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : imgNormal}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
      width="150"
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
