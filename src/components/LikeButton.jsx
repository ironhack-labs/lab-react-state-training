import { useState } from "react";


function LikeButton() {

    const [like, setLike] = useState(0)

    const handleClick = () => {
        setLike(like + 1)
    }

  return (
    <div>
      <button onClick={handleClick}>
        {like} Likes
      </button>
    </div>
  );
}

export default LikeButton;
