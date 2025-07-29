import { useState } from "react";

function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const index = likes % (colorArray.length - 1);

  const increaseLike = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <div>
        <button
          onClick={() => increaseLike()}
          className="discoButton"
          style={{ backgroundColor: colorArray[index] }}
        >
          {likes} Likes
        </button>
      </div>
    </>
  );
}

export default DiscoButton;
