import { useState } from "react";

function Carousel(props) {
  const styleBtn = {
    width: "100px",
    height: "50px",
    backgroundColor: "pink",
    borderRadius: "40px",
  };
  const { images } = props;
  const [imgCount, setImgCount] = useState(0);
  const displayImg = images[imgCount];

  const toggleImg = (button) => {
    if (button === "right" && imgCount < images.length - 1) {
      setImgCount(imgCount + 1);
    } else if (button === "right" && imgCount === images.length - 1) {
      setImgCount(0);
    } else if (button === "left" && imgCount > 0) {
      setImgCount(imgCount - 1);
    } else if (button === "left" && imgCount === 0) {
      setImgCount(images.length - 1);
    }
  };

  return (
    <div>
      <button onClick={() => toggleImg("left")} style={styleBtn}>Left</button>
      <img src={displayImg} alt="User images" width="200px" />
      <button onClick={() => toggleImg("right")} style={styleBtn}>Right</button>
    </div>
  );
}

export default Carousel;
