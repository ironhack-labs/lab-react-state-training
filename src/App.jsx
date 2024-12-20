import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import "./App.css";

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
