import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="counter-container">
        <Counter />
        <div className="like-contaier"><br></br>
          <LikeButton />
        </div>
      </div>
      <div className="silly-dog-container"><br></br>
        <ClickablePicture
          img1="src/assets/images/silly-dog-1.jpg"
          img2="src/assets/images/silly-dog-2.jpg"
        />
      </div><br></br>
      <div className="dice-container">
        <Dice />
      </div>

    </div>
  );
}

export default App;
