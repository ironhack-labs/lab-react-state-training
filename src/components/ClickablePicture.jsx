import React, { useState } from "react";

function ClickablePicture() {
  const [isToggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled(!isToggled);
  };
  return (
    <div className="ClickablePicture">
      <img
        src={
          isToggled
            ? "./src/assets/images/maxence.png"
            : "./src/assets/images/maxence-glasses.png"
        }
        alt="portrait"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;
