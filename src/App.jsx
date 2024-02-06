
import "./App.css";
import LikeButton from "./components/LikeButton.jsx"
import Counter from "./components/Counter.jsx"
import ClickablePicture from "./components/ClickablePicture.jsx"
import Dice from "./components/Dice.jsx"
import DiscoButton from "./components/DiscoButton.jsx"


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      Like Button
      <LikeButton />
      <p></p>
      Counter
      <Counter />
      <p></p>
      Clickable Picture
      <ClickablePicture />
      <p></p>
      Dice
      <Dice />
      <p></p>
      <DiscoButton />
      <p></p>




    </div>
  );
} 

export default App;
