import "./App.css";
import ClickablePicture from "./Components/ClickablePicture";
import Counter from "./Components/Counter";
import Dice from "./Components/Dice";
import LikeButton from "./Components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="container">
        <div className="like-buttons">
          <LikeButton />
          <LikeButton />
        </div>
        <Counter />
      </div>
      <div className="container">
        <ClickablePicture />
        <Dice />
      </div>
    </div>
  );
}

export default App;
