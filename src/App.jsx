import "./App.css";
import ClickablePicture from "./Components/ClickablePicture/ClickablePicture";
import Counter from "./Components/Counter/Counter";
import Dice from "./Components/Dice/Dice";
import LikeButton from "./Components/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
