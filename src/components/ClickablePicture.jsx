import React, { useState } from "react";
import maxence from "../assets/images/maxence.png";
import coolermaxence from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count % 2 ? (
        <img src={maxence} onClick={() => setCount(count - 1)} />
      ) : (
        <img src={coolermaxence} onClick={() => setCount(count + 1)} />
      )}
    </div>
  );
}
export default ClickablePicture;
