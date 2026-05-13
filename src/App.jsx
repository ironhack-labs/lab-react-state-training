import "./App.css";
import Counter from "./components/counter";
import LikeButton from "./components/likebutton";
import ClickablePicture from "./components/clickablepicture"
import Dice from "./components/dice"
import DiscoButton from "./components/discobutton";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
    </div>
  );
}

export default App;
