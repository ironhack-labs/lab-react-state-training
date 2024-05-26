import "./App.css";
import LikeButton from "./components/LikeButton";
import CounterButton from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <CounterButton/>
      <ClickablePicture/>
      <Dice/>

     
    </div>
  );
}

export default App;
