import "./App.css";
import ClickablePicture from "./Components/ClickablePicture";
import {LikeButton} from "./Components/LikeButton";
import {Counter} from "./Components/Counter";
import {Dice} from "./Components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <ClickablePicture/>
     
      <Counter/>

      <Dice />

    </div>
  );
}

export default App;
