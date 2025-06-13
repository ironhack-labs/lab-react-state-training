import { useState } from "react";
import glasses from "../assets/images/maxence-glasses.png";
import noglasses from "../assets/images/maxence.png";
function ClickablePicture() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <img
        onClick={() => setToggle(!toggle)}
        src={toggle ? noglasses : glasses}
        alt="photo"
        className="photo"
      ></img>
    </>
  );
}
export default ClickablePicture;
