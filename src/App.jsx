import "./App.css";
import LikeButton from "./components/likeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
import DiscoButton from "./components/discoButton.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <br></br>
      <LikeButton />
      <br></br>
      <Counter />
      <br></br>
      <ClickablePicture />
      <br></br>
      <Dice />
      <br></br>
      <DiscoButton />
    </div>
  );
}

export default App;
