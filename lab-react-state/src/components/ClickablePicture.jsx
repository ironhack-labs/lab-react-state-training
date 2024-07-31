import { useState } from "react";

function ClickablePicture() {
  const [bool, img] = useState(false);

  const imageHandler = () => {
    useState(true);
  };

  return (
    <>
      <img src="http://www.w3.org/2000/svg" onClick={imageHandler}></img>{" "}
      <img src="http://www.w3.org/1999/xlink"></img>;
    </>
  );
}

export default ClickablePicture;
