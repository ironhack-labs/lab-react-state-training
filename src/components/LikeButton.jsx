import { useState } from "react";

function LikeButton() {
  const [likeValue, setLikeValue] = useState(0);
  const [likeValue2, setLikeValue2] = useState(0);

  const handleIncrease = (button) => {
    if (button === 1) {
      setLikeValue(likeValue + 1);
    }
    if (button === 2) {
      setLikeValue2(likeValue2 + 1);
    }
  };

  const btnClear = ()=> {
    setLikeValue(0);
    setLikeValue2 (0);
  }

  const styleButtons = {
    height: "30px",
    borderRadius: "10px",
    margin: "5px",
    backgroundColor: "pink",
  };

  return (
    <div>
      <button onClick={() => handleIncrease(1)} style={styleButtons}>
        {likeValue} Likes
      </button>
      <button onClick={() => handleIncrease(2)} style={styleButtons}>
        {likeValue2} Likes
      </button>
      <button onClick={btnClear} style={styleButtons}>Clear</button>
    </div>
  );
}

export default LikeButton;
