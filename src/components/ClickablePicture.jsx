import { useState } from "react";

import originalImg from "../assets/images/maxence.png";
import toggledImg from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [toggle, setToggle] = useState(originalImg);

  const togglePicture = () => {
    if (toggle === originalImg) {
      setToggle(toggledImg);
    } else {
      setToggle(originalImg);
    }
  };

  return (
    <button className="toggle-picture" onClick={togglePicture}>
      <img src={toggle} />
    </button>
  );
}

export default ClickablePicture;
