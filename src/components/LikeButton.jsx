import { useState } from "react";
function LikeButton() {
  console.log("This is LikeButton");
const [counter, setCounter] = useState(0);

const increaseCounter = () => {
    setCounter(counter + 1)
}
  return (
    <div className="Box">
        <section>
            <h2>Iteración 1 |LikeButton</h2>
            <button onClick={increaseCounter}>{counter}  Likes</button>
        </section>
    </div>
  );

}
export default LikeButton;