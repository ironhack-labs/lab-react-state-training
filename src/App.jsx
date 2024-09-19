import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClicablePicture from "./components/ClicablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <Counter/>
      <ClicablePicture/>
      <Dice />
    </div>

    
  );
}

export default App;
