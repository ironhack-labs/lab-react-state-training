import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicure.jsx";
import Dice from "./components/Dice.jsx";

function App() {
  return (
    <div className="App">
      <h1> like👍🏽</h1>
      <LikeButton/>
      <LikeButton/>
      <Counter />
      <ClickablePicture />
      <Dice />
    </div> 
   
    
  );
}

export default App;
