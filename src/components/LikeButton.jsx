import { useState } from "react";

function LikeButton() {
  const [like1, setlike1] = useState(0);
  const [like2, setlike2] = useState(0);
  return (
    <>
      <button onClick={() => setlike1(like1 + 1)}>{like1} Likes</button>
      <button onClick={() => setlike2(like2 + 1)}>{like2} Likes</button>
    </>
  );
}
export default LikeButton;
