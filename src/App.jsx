import "./App.css";
import LikeButton from "../src/components/LikeButton"
import Counter from "../src/components/Counter"
import ClickablePicture from "./components/ClickablePicture"; 
import Dice from "./components/dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice/>
    </div>
  );
}

export default App;
