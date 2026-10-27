import { useState } from "react";

function ClickablePicture(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div>
      <img
        src={clicked ? props.imgClicked : props.img}
        alt="Clickable"
        onClick={handleClick}
      />
    </div>
  );
}

export default ClickablePicture;