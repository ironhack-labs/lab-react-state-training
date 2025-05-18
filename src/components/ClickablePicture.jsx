import maxence from "../assets/images/maxence.png";
import maxenceglasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

function ClickablePicture() {
  const [hasGlasses, setHasGlasses] = useState(false);

  return (
    <div>
      {hasGlasses == false ? (
        <img
          src={maxence}
          onClick={() => {
            setHasGlasses(true);
          }}
        ></img>
      ) : (
        <img
          src={maxenceglasses}
          onClick={() => {
            setHasGlasses(false);
          }}
        ></img>
      )}
    </div>
  );
}
export default ClickablePicture;
