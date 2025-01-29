import { use } from "react";
import { useState } from "react";

function DiscoButton() {
  const [like, setLike] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const changeState = () => {
    console.log(like, like % colors.length);
    setLike(like + 1);
  };

  return (
    <button
      style={{
        backgroundColor: colors[like % colors.length],
      }}
      onClick={changeState}
    >
      {" "}
      {like} Likes{" "}
    </button>
  );
}

export default DiscoButton;
