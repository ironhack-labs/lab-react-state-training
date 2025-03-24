import { useState } from "react";

export function ClickablePicture() {
  const [showGlasses, setShowGlasses] = useState("glasses-on");

  const toggleGlasses = () => {
    if (showGlasses === "glasses-on") {
      setShowGlasses("glasses-off");
    } else {
      setShowGlasses("glasses-on");
    }
  };
  return (
    <button onClick={toggleGlasses}>

      <img className="background"
        src="src\assets\images\maxence.png"
        alt="Maxence"
      />
      <img
        className={`glasses ${showGlasses}`}
        src="src\assets\images\glasses.png"
        alt="Glasses"
      />
    </button>
  );
}
