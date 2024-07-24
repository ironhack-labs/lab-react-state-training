import "./App.css";
import ClickablePicture from "./ClickablePicture/ClickablePicture";
import Counter from "./Counter/Counter";
import Dice from "./Dice/Dice";
import LikeButton from "./LikeButton/LikeButton";

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
