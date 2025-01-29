import { useState } from "react";

export default function ClickablePicture() {
  const [onOff, setState] = useState(false);

  const changePhoto = () => {
    // console.log(onOff);
    setState(!onOff);
  };

  let glasses = "src/assets/images/maxence-glasses.png";
  let noGlasses = "src/assets/images/maxence.png";

  return (
    <>
      <img onClick={changePhoto} src={onOff ? glasses : noGlasses} alt="Your Image" />
    </>
  );
}
