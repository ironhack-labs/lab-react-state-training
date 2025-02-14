import "./App.css";
import LikeButton from "./components/likeButton";
import Counter from "./components/counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
    </div>
  );
}

export default App;
