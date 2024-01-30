import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React State Training</h1>
      <h2>Iteration 1: LikeButton</h2>
      <LikeButton />
      <h2>Iteration 2: Counter</h2>
      <Counter />
      <h2>Iteration 3: ClickablePicture</h2>
      <ClickablePicture />
      <h2>Iteration 4: Dice</h2>
      <Dice />
      <h2>Iteration 5: DiscoButton</h2>
      <DiscoButton />
    </div>
  );
}

export default App;
