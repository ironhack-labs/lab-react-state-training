import React from "react";
import { useState } from "react";


export default function ClickablePicture() {
  const [conLentes, setConLentes] = useState(false);

  const cambia= () => {
    setConLentes(!conLentes);
  };

  return (
    <>
      {conLentes ? (
        <img onClick={cambia}src="../src/assets/images/maxence-glasses.png" alt="foto" />
      ) : (
        <img onClick={cambia}src="../src/assets/images/maxence.png" alt="foto" />
      )}
    </>
  );
}
