import "./App.css";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Counter from "./components/Counter.jsx";
import Dice from "./components/Dice.jsx";
import LikeButton from "./components/LikeButton.jsx";

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
