import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickableImage from "./components/ClickableImage";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickableImage />
      <Dice />
    </div>
  );
}

export default App;
