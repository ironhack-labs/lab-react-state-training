import { useState } from "react";

function ClickablePicture() {
  const [ src, setSource] = useState("src/assets/images/maxence.png");

  const toggle = () => {
    if (src === "src/assets/images/maxence.png"){
      setSource("src/assets/images/maxence-glasses.png");
    } else {
      setSource("src/assets/images/maxence.png");
    }
  }
  
  return (
    <div className="ClickablePicture p-3" onClick={() => toggle()}>
      <img src={src} alt="Smiling Max" />
    </div>
  );
}

export default ClickablePicture;