import "./App.css";
import Counter from './components/Counter'
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: '20px' }}> LAB | React Training</h1>
      <LikeButton />
      <br />
      <Counter />
      <br />
      <ClickablePicture />
      <br />
      <Dice />
    </div>
  );
}

export default App;
