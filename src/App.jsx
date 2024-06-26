import "./App.css";
import LikeButton from "./components/likeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
      <DiscoButton/>
    </div>
  );
}

export default App;
