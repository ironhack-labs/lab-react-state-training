import { useState } from "react";
import img from "../assets/images/maxence.png";
import coolImg from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [coolState, setCoolState] = useState(false);

  const toggleCool = () => {
    setCoolState(!coolState);
  };
  return (
    <div>
      {!coolState ? (
        <img src={img} onClick={toggleCool} />
      ) : (
        <img src={coolImg} onClick={toggleCool} />
      )}
    </div>
  );
}
