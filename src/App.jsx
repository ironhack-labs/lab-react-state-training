import "./App.css";
import { ClickablePicture } from "./components/ClickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { LikeButton } from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div id="like-btn-container">
        <LikeButton />
        <LikeButton />
      </div>
      <div id="counter-container">
        <Counter />
      </div>
      <div>
        <ClickablePicture />
      </div>
      <div>
        <Dice />
      </div>
    </div>
  );
}

export default App;
