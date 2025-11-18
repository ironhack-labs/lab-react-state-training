import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      <div style={{ margin: '20px' }}>
        <h2>Like Button</h2>
        <LikeButton />

        <h2>Counter</h2>
        <Counter />
        
        <h2>Clickable Picture</h2>
        <ClickablePicture />

        <h2>Dice</h2>
        <Dice />
      </div>
    </div>
  );
}

export default App;
