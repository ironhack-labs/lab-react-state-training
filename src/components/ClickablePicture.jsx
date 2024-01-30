import { useState } from "react";

function ClickablePicture() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  return (
    <div className="LikeButton">
      <h2>Clickable Image</h2>
      <img
        src={
          click
            ? "/src/assets/images/maxence.png"
            : "/src/assets/images/maxence-glasses.png"
        }
        onClick={handleClick}
      />
    </div>
  );
}
export default ClickablePicture;
