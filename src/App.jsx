import "./App.css";

import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Iteration 1 | LikeButton</h2>
      <LikeButton />
      <h2>Iteration 2 | Counter</h2>
      <Counter />
      <h2>Iteration 3 | State: ClickablePicture</h2>
      <ClickablePicture />
      <h2>Iteration 4 | State: Dice</h2>
      <Dice />
    </div>
  );
}

export default App;
