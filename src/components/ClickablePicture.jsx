

import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
      style={{ width: "200px" }}
    />
  );
}

export default ClickablePicture;



   