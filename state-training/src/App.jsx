import "./App.css";
import Counter from "./components/counter";
import LikeButton from "./components/likebtn";
import Photos from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DicoButton";

function App() {
  return (
    <div className="App">
      <Counter />
      <LikeButton />
      <LikeButton />
      <Photos />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
