import React, { useState } from "react";

function ClickablePicture() {
  const [isImageOne, setIsImageOne] = useState(true);

  const toggleImage = () => {
    setIsImageOne(!isImageOne);
  };

  const image1 = "./src/assets/images/maxence.png";
  const image2 = "./src/assets/images/maxence-glasses.png";

  return (
    <div>
      <img
        src={isImageOne ? image1 : image2}
        alt="Clickable"
        onClick={toggleImage}
        style={{ cursor: "pointer", width: "300px", height: "auto" }} // Adjust size as needed
      />
    </div>
  );
}

export default ClickablePicture;
