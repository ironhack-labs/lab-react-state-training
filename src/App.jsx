import "./App.css";
import ClickablePicture from "./ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import Dice from "./components/Dice"


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton/>
    <br />
    <br />
      <Counter/>
    
    <br />
    <br />

    <ClickablePicture/>

    <br />
    <br />

    <Dice/>

    </div>
  );
}

export default App;
