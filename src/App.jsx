import "./App.css";
import LikeButton from "./components/LikeButton.jsx"
import Counter from "./components/Counter.jsx"
import ClickablePicture from "./components/ClickablePicture.jsx"
import Dice from "./components/Dice.jsx"
function App() {
  return (
    <div className="App">
      <LikeButton /><LikeButton />
      <p> </p>
      <Counter />
      <p> </p>
      <ClickablePicture />
      <p> </p>
      <Dice />
    </div>
  );
}

export default App;
