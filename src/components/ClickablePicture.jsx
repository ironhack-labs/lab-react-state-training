import React, { useState } from "react";

function ClickablePicture() {
  const [isGangster, setIsGangster] = useState(false);

  const handleClick = () => {
    setIsGangster((prevState) => !prevState);
  };

  return (
    <img
      src={isGangster ? "src/assets/images/maxence-glasses.png" : "src/assets/images/maxence.png"}
      alt={isGangster ? "gangsta" : "not gangsta"}
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;