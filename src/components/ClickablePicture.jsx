import { useState } from "react";
import imagen1 from "../assets/images/maxence.png";
import imagen2 from "../assets/images/maxence-glasses.png"


function ClickablePicture() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

  return (
    <div>
      <img src={clicked ? imagen2 : imagen1} alt="imangen" onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;
