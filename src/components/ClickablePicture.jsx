import { useState } from "react";

import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div>
        <img
          src={isClicked ? maxenceGlasses : maxence}
          alt="maxence"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default ClickablePicture;
