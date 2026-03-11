import { useState } from "react";

function ClickablePicture(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <img
      src={isClicked ? props.imgClicked : props.img}
      alt="picture"
      onClick={() => setIsClicked(!isClicked)}
    />
  );
}

export default ClickablePicture;