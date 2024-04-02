import { useState } from "react";
import photo from "../assets/assets/images/maxence-glasses.png";
import normalPhoto from "../assets/assets/images/maxence.png";

function Photos() {
  const [isGlasses, setIsGlasses] = useState(false);

  return (
    <img
      src={isGlasses ? photo : normalPhoto}
      alt=""
      onClick={() => {
        setIsGlasses(!isGlasses);
      }}
    />
  );
}

export default Photos;
