
import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? img2 : img1}
      alt="Clickable"
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
