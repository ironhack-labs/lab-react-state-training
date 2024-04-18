import { useState } from "react";
import ProfileImage from "../assets/images/maxence.png";
import ProfileImageGlasses from "../assets/images/maxence-glasses.png";

function ClickPicture({ handleClick }) {
  const [toggled, setToggled] = useState(true);

  const toggleImage = () => setToggled(!toggled);

  return (
    <div>
      <img
        src={toggled ? ProfileImageGlasses : ProfileImage}
        alt="Profile"
        onClick={toggleImage}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ClickPicture;
