import { useState } from "react";
import Maxence from "../assets/images/maxence.png";
import MaxenceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <button onClick={handleClick}>
        {clicked ? (
          <img src={MaxenceGlasses} alt="Image of a slightly cooler person" />
        ) : (
          <img src={Maxence} alt="Image of a person" />
        )}
      </button>
    </>
  );
}

export default ClickablePicture;
