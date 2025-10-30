import "./App.css";
import ClickablePicture from "./ClickablePicture";
import Counter from "./Counter";
import Dice from "./Dice";
import LikeButton from "./LikeButton";

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
