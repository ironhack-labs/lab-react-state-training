import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <h1> LAB | React Training</h1>
    </div>
    <div>
      <LikeButton />
      <LikeButton />
    </div>
    <Counter />
    <ClickablePicture />
    <Dice />
  </>
);
}

export default App;
