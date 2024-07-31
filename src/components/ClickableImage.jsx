import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

export default function ClickableImage() {
  const [bool, setBool] = useState(false);

  const handleClick = () => setBool(!bool);

  return (
    <div>
      <img
        src={!bool ? img1 : img2}
        alt="maxence"
        onClick={() => handleClick()}
      />
    </div>
  );
}
