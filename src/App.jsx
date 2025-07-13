import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App p-6 space-y-6">
      <h1>LAB | React Training</h1>

      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
