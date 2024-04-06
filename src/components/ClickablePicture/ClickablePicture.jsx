import { useState } from "react";
import maxence from "src/assets/images/maxence.png";
import maxenceGlasses from "src/assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [url, setUrl] = useState(false);
  function handlePhoto() {
    setUrl(!url);
  }

  return (
    <div>
      <img onClick={handlePhoto} src={url ? maxence : maxenceGlasses} alt="" />
    </div>
  );
}

export default ClickablePicture;
