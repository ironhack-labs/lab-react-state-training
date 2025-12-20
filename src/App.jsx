import "./App.css";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx"; 
import Dice from "./components/Dice.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React State Training</h1>

      <h2>Iteration 1: LikeButton</h2>
      <LikeButton />
      <LikeButton />

      <h2>Iteration 2: Counter</h2>
       <Counter />


      <h2>Iteration 3: ClickablePicture</h2>
      <ClickablePicture />
     
     
      <h2>Iteration 4: Dice</h2>
      <Dice />
      
    </div>
  );
}

export default App;
