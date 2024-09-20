import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Iteración 1</h2>
      <LikeButton />

      <h2>Iteración 2</h2>
      <Counter />

      <h2>Iteración 3</h2>
      <ClickablePicture />

      <h2>Iteración 4</h2>
      <Dice />

    </div>
  );
}

export default App;
