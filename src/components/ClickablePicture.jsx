import { useState } from "react";
import maxence from "../assets/maxence.png";
import maxenceGlasses from "../assets/maxence-glasses.png";

export default function ClickablePicture() {
  const [version, setVersion] = useState(maxence);
  const toggleVersion = () => {
    setVersion((prevVersion) =>
      prevVersion === maxence ? maxenceGlasses : maxence
    );
  };

  return (
    <div>
      <img src={version} onClick={toggleVersion} />
    </div>
  );
}
