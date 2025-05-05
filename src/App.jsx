import "./App.css";
import Counter from "./components/counter";
import LikeButton from "./components/likeButton";
import ClickablePicture from "./components/clickablePicture";
import RandomDiceImage from "./components/dice";
function App() {
  return (
    <>
      <div className="App">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="counter">
        <Counter />
      </div>
      <div className="clickable">
        <ClickablePicture />
      </div>
      <div>
        <RandomDiceImage />
      </div>
    </>
  );
}

export default App;
