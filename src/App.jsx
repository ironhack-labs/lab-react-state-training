import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import Dice from "./components/Dice";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
        <div>
          <LikeButton />
          <LikeButton />
        </div>

        <div>
          <Counter />
        </div>
        <ClickablePicture />

        <div></div>
        <Dice />
      </div>
    </>
  );
}

export default App;
