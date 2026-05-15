import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div>
      <h1>React State Training</h1>

      <h2>Iteration 1 - LikeButton</h2>
      <LikeButton />

      <h2>Iteration 2 - Counter</h2>
      <Counter />

      <h2>Iteration 3 - ClickablePicture</h2>
      <ClickablePicture />

      <h2>Iteration 4 - Dice</h2>
      <Dice />
    </div>
  );
}

export default App;
