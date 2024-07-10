import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClicablePicture from "./components/ClicablePicture";
import Dice from "./components/Dice";
function App() {
  return (
    <div>
      <LikeButton />
      <Counter />
      <ClicablePicture />
      <Dice />
    </div>
  );
}

export default App;
