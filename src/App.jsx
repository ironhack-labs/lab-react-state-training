import "./App.css";
import Counter from "./components/Counter.jsx";
import LikeButton from "./components/LikeButton.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <ClickablePicture />
      <br />
      <br />
      <br />
      <br />
      <Dice />
    </div>
  );
}

export default App;
