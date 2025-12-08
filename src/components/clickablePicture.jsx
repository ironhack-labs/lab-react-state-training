import { useState } from "react";
import img1 from "../assets/images/maxence.png"; // reemplaza por los nombres reales
import img2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [toggled, setToggled] = useState(false);

  return (
    <img
      src={toggled ? img2 : img1}
      alt="Clickable"
      onClick={() => setToggled((prev) => !prev)}
      style={{ cursor: "pointer", display: "flex", maxHeight: "50px"}}
    />
  );
}

export default ClickablePicture;
