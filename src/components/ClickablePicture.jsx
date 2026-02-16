import { useState } from "react";

function ClickablePicture({ img1, img2 }) {
  const [image, setImage] = useState(img1);

  return (
    <img
      src={image}
      alt="clickable"
      onClick={() =>
        setImage(image === img1 ? img2 : img1)
      }
    />
  );
}

export default ClickablePicture;
