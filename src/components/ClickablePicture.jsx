import { useState } from "react";

function ClickablePicture() {
  const [toggled, setToggledImage] = useState(false);

  const changePicture = () => {
    setToggledImage(!toggled);
  };

  return (
    <div>
      <img
        onClick={changePicture}
        src={
          toggled
            ? "../src/assets/images/maxence-glasses.png"
            : "../src/assets/images/maxence.png"
        }
        alt="image"
      />
    </div>
  );
}
export default ClickablePicture;
