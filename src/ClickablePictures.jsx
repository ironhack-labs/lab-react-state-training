import { useState } from "react";

import img1 from "../assets/images/me.png";
import img2 from "../assets/images/me-glasses.png";

function ClickablePicture() {
  const [toggled, setToggled] = useState(false);

  return (
    <img
      className="clickable-picture"
      src={toggled ? img2 : img1}
      alt="clickable"
      onClick={() => setToggled(!toggled)}
    />
  );
}

export default ClickablePicture;