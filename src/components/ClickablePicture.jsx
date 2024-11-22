import { useState } from "react";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const picture1 = "./public/images/maxence.png";
  const picture2 = "./public/images/maxence-glasses.png";

  const mouseClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <img
        src={isClicked ? picture2 : picture1}
        alt="Pictures of a young man"
        onClick={mouseClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
