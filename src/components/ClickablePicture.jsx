import { useState } from "react";
import "./ClickablePicture.css";

const ClickablePicture = ({ faceWithGlasses, faceWithoutGlasses }) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <img
      className="clickable-picture"
      onClick={() => toggle()}
      src={active ? faceWithGlasses : faceWithoutGlasses}
      alt="face"
    />
  );
};
export default ClickablePicture;
