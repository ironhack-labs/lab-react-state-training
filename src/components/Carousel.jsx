import { useState } from "react";

export default function Carousel(props) {
  const [image, setImage] = useState(props.imagesArr[0]);

  return (
    <div>
      <button
        id="buttonStyle"
        onClick={() =>
          image > 0
            ? setImage(props.imagesArr[image - 1])
            : setImage(props.imagesArr[props.imagesArr.length - 1])
        }
      >
        LEFT
      </button>
      <img src={image} alt="" />
      <button
        id="buttonStyle"
        onClick={() =>
          image < props.imagesArr.length - 1
            ? setImage(props.imagesArr[image + 1])
            : setImage(props.imagesArr[0])
        }
      >
        RIGHT
      </button>
    </div>
  );
}
