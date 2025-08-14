import React from "react";

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = React.useState(false);
  return (
    <img
      style={{ width: "200px" }}
      onClick={() => {
        setClicked(!clicked);
      }}
      src={!clicked ? img : imgClicked}
      alt="clickable"
    />
  );
}

export default ClickablePicture;
