import "./App.css";
import LikeButton from "./components/likeButton.jsx";
import Counter from "./components/counter.jsx";
import ClickablePicture from "./components/clickablePicture.jsx";
import Dice from "./components/dice.jsx";

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