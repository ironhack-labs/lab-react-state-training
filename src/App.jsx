import "./App.css";
import Likebutton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Likebutton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
    </div>
    
  );
}

export default App;
