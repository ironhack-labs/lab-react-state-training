import React, { useState } from "react";
import noGlasses from "../assets/images/maxence.png";
import withGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [isImage1Displayed, setIsImage1Displayed] = useState(noGlasses);

  const toggleImage = () => {
    setIsImage1Displayed(!isImage1Displayed);
  };

  return (
    <img
      src={
        isImage1Displayed
          ? noGlasses
          : withGlasses
      }
      alt="Clickable Picture"
      onClick={toggleImage}
    />
  );
}

export default ClickablePicture;

// import React, { useState } from "react";
// import noGlasses from "../assets/images/maxence.png";
// import withGlasses from "../assets/images/maxence-glasses.png";
// let ClickableImg = () => {
//   const [pic, setPic] = useState(noGlasses);
//   const changePic = () => {
//     if (pic === noGlasses) {
//       setPic(withGlasses);
//     } else {
//       setPic(noGlasses);
//     }
//   };
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >
//         <img src={pic} alt="noGlasses" onClick={changePic} />
//       </div>
//     </>
//   );
// };
// export default ClickableImg;