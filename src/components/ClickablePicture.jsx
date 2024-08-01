import { useState } from "react";
import Maxence from "../assets/images/maxence.png";
import MaxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [picture, clickedPicture] = useState(true);

  const handleToggle = () => {
    clickedPicture(!picture);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {picture ? <img src={Maxence} /> : <img src={MaxenceGlasses} />}
      </button>
    </div>
  );
}

export default ClickablePicture;
