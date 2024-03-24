import { useState } from "react";
import "./ClickablePicture.css";
import maxence from "../../assets/images/maxence.png";
import maxenceGlassses from "../../assets/images/maxence-glasses.png";
function ClickablePicture() {
  const [url, setUrl] = useState(false);
  function handlePhoto() {
    setUrl(!url);
  }

  return (
    <div>
      <img onClick={handlePhoto} src={url ? maxence : maxenceGlassses} alt="" />
    </div>
  );
}

export default ClickablePicture;
