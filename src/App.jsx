import "./App.css";
import ClickablePicture from "./components/clickablePicture";
import Counter from "./components/counter";
import Dice from "./components/dice";
import DiscoButton from "./components/discoButton";
import LikeButton from "./components/likeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <LikeButton />

      <br />

      <Counter />

      <br />

      <ClickablePicture />

      <br />

      <Dice />

      <br />

      <DiscoButton />
      <DiscoButton />
    </div>
  );
}

export default App;
