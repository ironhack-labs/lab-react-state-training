import { useState } from "react";

function ClickablePicture() {
  let [photo, updatePhoto] = useState("src/assets/images/maxence.png");
  const changePhoto = () => {
    if (photo === "src/assets/images/maxence.png") {
      updatePhoto((photo = "src/assets/images/maxence-glasses.png"));
    } else {
      updatePhoto((photo = "src/assets/images/maxence.png"));
    }
  };

  return <img src={photo} onClick={changePhoto} />;
}

export default ClickablePicture;
