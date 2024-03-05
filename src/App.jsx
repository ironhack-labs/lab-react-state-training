import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeBtn from "./components/LikeBtn";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeBtn ></LikeBtn>
      <br></br>
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
