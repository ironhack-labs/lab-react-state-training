import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [count, setCount] = useState(0);
  const toggleImage = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <div onClick={toggleImage}>
        {count % 2 === 0 ? (
          <img src={maxenceGlasses} alt="funny portrait with glasses" />
        ) : (
          <img src={maxence} alt="funny portrait" />
        )}
      </div>
    </>
  );
}

export default ClickablePicture;
