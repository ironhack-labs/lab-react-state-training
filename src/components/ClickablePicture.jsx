import { useState } from "react";
import withoutGlass from "/src/assets/images/maxence.png";
import withGlass from "/src/assets/images/maxence-glasses.png";

export default function ClickablePicture() {
  const [picture, setPicture] = useState(withoutGlass);
  const changePicture = () => {
    let value = picture;
    if (value === withoutGlass) {
      setPicture(withGlass);
    } else {
      setPicture(withoutGlass);
    }
  };
  return (
    <div>
      <img
        style={{ height: "200px" }}
        src={picture}
        alt=""
        onClick={() => changePicture()}
      />
    </div>
  );
}
