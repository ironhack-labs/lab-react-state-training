import { useState } from "react";
import pic1 from "../assets/images/maxence.png";
import pic2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [imageSource, setImageSource] = useState(pic1);
  const newPic = () => {
    console.log("new picture");
    if (imageSource === pic1) {
      setImageSource(pic2);
    } else {
      setImageSource(pic1);
    }
  };
  return (
    <div>
      <img
        src={imageSource}
        alt="aa"
        width="150px"
        style={{ border: "solid 3px" }}
        onClick={newPic}
      />
    </div>
  );
}

export default ClickablePicture;
