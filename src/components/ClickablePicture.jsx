import { useState } from "react";
import Photo from "../assets/images/maxence.png";
import Photo2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [photos, setPhotos] = useState(false);
  const toggle = photos ? Photo : Photo2;

  return (
    <div>
      <img onClick={() => setPhotos(!photos)} src={toggle} />
    </div>
  );
}

export default ClickablePicture;
