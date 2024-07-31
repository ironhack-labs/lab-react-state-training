import { useState } from "react";

function ClickablePicture() {
  const [clicked, setClicked] = useState();

  const imageHandler = () => {
    if (setClicked(!clicked)) {
    }
  };

  return (
    <>
      <img
        className="picture"
        src={
          clicked
            ? "src/assets/images/maxence-glasses.png"
            : "src/assets/images/maxence.png"
        }
        onClick={imageHandler}
      ></img>
    </>
  );
}

export default ClickablePicture;
