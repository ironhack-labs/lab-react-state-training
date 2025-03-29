import { useState } from "react";

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <img
        src={isClicked?'src/assets/images/maxence.png':"src/assets/images/maxence-glasses.png"}
        alt="Clickable"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickablePicture;
