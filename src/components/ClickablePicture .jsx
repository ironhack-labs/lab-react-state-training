import React, { useState } from "react";
import picture1 from "../assets/images/maxence.png";
import picture2 from "../assets/images/maxence-glasses.png";

const ClickablePicture = () => {
  const [isPicture1, setIsPicture1] = useState(true);

  const handleClick = () => {
    setIsPicture1(!isPicture1);
  };

  return (
    <img
      src={isPicture1 ? picture1 : picture2}
      alt="Toggle"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ClickablePicture;
