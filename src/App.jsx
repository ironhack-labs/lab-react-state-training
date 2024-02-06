// ? styles
import "./App.css";

// components
import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";

function App() {
  return (
    <div className="app">
      <h1> LAB | React Training</h1>

      <LikeButton />

      <Counter />

      <ClickablePicture />

      <Dice />
    </div>
  );
}

export default App;
