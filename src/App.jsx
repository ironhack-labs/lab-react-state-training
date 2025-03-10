import ClickablePicture from "./components/clickable-picture/clickablepicture";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <>
      <div className="container d-flex p-1">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="container d-flex p-3">
        <Counter />
      </div>
      <div className="container d-flex p-3">
        <ClickablePicture />
      </div>

      <div className="container d-flex p-3">
        <Dice />
      </div>
    </>
  );
}

export default App;
