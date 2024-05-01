import { useState } from "react";
import styles from "./ClickablePicture.module.css";

const ClickablePicture = () => {
  const images = [
    "/src/assets/images/maxence.png",
    "/src/assets/images/maxence-glasses.png",
  ];

  const [firstImage, secondImage] = images;

  const [cond, setCond] = useState(true);
  return (
    <div>
      <img
        src={cond ? firstImage : secondImage}
        alt="person"
        onClick={() => {
          setCond(!cond);
        }}
      />
    </div>
  );
};

export default ClickablePicture;
