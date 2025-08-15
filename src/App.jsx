import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import LikeButton from "./components/LikeButton";
import Counter from "./components/counter"
import Dice from "./components/Dice"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      
    </div>
  );
}

export default App;
