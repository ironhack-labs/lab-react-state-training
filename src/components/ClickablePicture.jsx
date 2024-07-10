import { useState } from "react";

export default function ClickablePicture() {
  const [sunglasses, setSunglasses] = useState(false);
  //   const toggleSunglasses = () => {
  //     setSunglasses(!sunglasses ? true : false);
  //   };
  return (
    <img
      onClick={() => setSunglasses(!sunglasses)}
      src={
        sunglasses
          ? "src/assets/images/maxence-glasses.png"
          : "src/assets/images/maxence.png"
      }
    />
  );
}
