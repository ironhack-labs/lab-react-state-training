import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickPicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickPicture />
      <Dice />
    </div>
  );
}

export default App;
