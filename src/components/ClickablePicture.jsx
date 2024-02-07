import { useState } from "react";

function ClickablePicture() {
  const [currentImage, setCurrentImage] = useState(
    "src/assets/images/maxence.png"
  );
  function handleClick() {
    setCurrentImage("src/assets/images/maxence-glasses.png");
  }
  return (
    <div className="clickable-Picture">
        {/** Its always better to have a function performing or handle the action we want the state to perform  */}
      <img src={currentImage} alt="ClickablePicture" onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;
