import "./App.css";
import LikeButton from "./assets/components/LikeButton";
import Counter from "./assets/components/counter"
import ClickablePicture from "./assets/components/ClickablePicture";
import Dice from "./assets/components/Dice";

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
