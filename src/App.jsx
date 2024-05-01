import "./App.css";
import ClickcablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import Counter from "./components/counter/counter";
import LikeButton from "./components/likeButton/likeButton";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <Counter />
      <ClickcablePicture />
      <Dice />
    </div>
  );
}

export default App;
