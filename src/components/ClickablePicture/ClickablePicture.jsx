import React, { useState } from "react";
import maxence from "../../assets/images/maxence.png";
import maxenceGlasses from "../../assets/images/maxence-glasses.png";

export const ClickablePicture = () => {
  const [img, setImg] = useState(false);

  return (
    <>
      <button onClick={() => setImg(!img)}>
        <img src={img ? maxence : maxenceGlasses} alt="" />
      </button>
    </>
  );
};
