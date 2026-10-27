import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h2>Iteration 1</h2>
      <LikeButton /> &nbsp;
      <LikeButton />
      <h2>Iteration 2</h2>
      <Counter />
      <h2>Iteration 3</h2>
      <ClickablePicture />
      <h2>Iteration 4</h2>
      <Dice />
    </div>
  );
}

export default App;
