import { useState } from "react";

function ClickablePic() {
  const [image, setImage] = useState("src/assets/images/maxence.png");
  const click = () => {
    setImage(
      image === "src/assets/images/maxence.png"
        ? "src/assets/images/maxence-glasses.png"
        : "src/assets/images/maxence.png"
    );
  };
  return (
    <div>
      <img src={image} alt="Clickable Picture" onClick={click} />
    </div>
  );
}

export default ClickablePic;
