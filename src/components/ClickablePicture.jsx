import { useState } from "react";

function ClickablePicture() {
  const [photoId, setPhotoId] = useState("photo-off");

  function changePhoto() {
    if(photoId === "photo-off") {
        setPhotoId("photo-on");
    } else {
        setPhotoId("photo-off");
    }

  }

  return (
    <>
      <div id={photoId} onClick={changePhoto}></div>
    </>
  );
}

export default ClickablePicture;
