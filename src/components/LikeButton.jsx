import { useState } from "react";
function LikeButton() {
  const [Likes, setLikes] = useState(0);
  const [Likes2, setLikes2] = useState(0);

  const increaseLikes = () => {
    setLikes(Likes + 1);
  };
  const increaseLikes2 = () => {
    setLikes2(Likes + 1);
  };
  return (
    <section>
        <button onClick={increaseLikes}>{Likes}Likes!</button>
        <button onClick={increaseLikes2}>{Likes2}Likes!</button>

    </section>
  );
}
export default LikeButton;
