// ! modules
import { useState } from "react";

// ? style
import "./ClickablePicture.css";

import image from "./../../assets/images/maxence.png";
import imageWithGlasses from "./../../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [active, setActive] = useState(false);

  return (
    <img
      onClick={() => setActive(!active)}
      className="clickable-picture"
      alt="clickable picture"
      src={active ? imageWithGlasses : image}
    />
  );
}
