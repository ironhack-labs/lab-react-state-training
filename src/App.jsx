import ClickablePicture from "./assets/components/clickablePicture/clickablePicture";
import Counter from "./assets/components/counter/counter";
import Dice from "./assets/components/dice/dice";
import LikeButton from "./assets/components/LikeButton/likeButton";

function App() {
  return (
    <div className="container p-5 mb-2">
      <h1 className="mb-2"> LAB | React Training</h1>
      <div className="d-flex gap-2 mb-2">
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ClickablePicture
          src="/src/assets/images/maxence.png"
          toggleSrc="/src/assets/images/maxence-glasses.png"
          alt="maxence"
        />
      </div>
      <div>
        <Dice />
      </div>
    </div>
  );
}

export default App;
