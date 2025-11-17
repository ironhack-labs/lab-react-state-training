import { useState } from "react";

export default function ClickablePicture() {
  const [withGlasses, setWithGlasses] = useState(false);

  const handleClick = () => {
    console.log("Image clicked – toggling!");
    setWithGlasses(!withGlasses);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "30px" }}>
      <img
        src={withGlasses ? "/maxence-glasses.png" : "/maxence.png"}
        alt="Maxence"
        onClick={handleClick}
        style={{
          width: "250px",
          cursor: "pointer",
          transition: "0.3s ease",
          borderRadius: "12px",
        }}
      />
      <p>Click the picture to toggle</p>
    </div>
  );
}
