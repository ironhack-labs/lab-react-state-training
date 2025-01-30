import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div style={{ display: "flex", gap: "10px", marginLeft: 10 }}>
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ClickablePicture />
      </div>
      <div>
        <Dice />
      </div>
      <div style={{ display: "flex", gap: "10px", marginLeft: 10 }}>
        <DiscoButton />
        <DiscoButton />
      </div>
    </div>
  );
}

export default App;
