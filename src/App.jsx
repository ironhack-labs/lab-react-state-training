import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <div className="boton">
        <LikeButton />
        <LikeButton />
      </div>

      <div>
      <Counter />
      </div>

      <ClickablePicture />

      <Dice />

    </div>
  );
}

export default App;
