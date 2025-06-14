import glasses from "../assets/images/maxence-glasses.png";
import noGlasses from "../assets/images/maxence.png";
import { useState } from "react";
export default function ClickablePicture() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div>
        <img
          src={toggle ? glasses : noGlasses}
          alt="Clickable Picture"
          onClick={() => setToggle(!toggle)}
          style={{width: "30vw"}}
        />
      </div>
    </>
  );
}
