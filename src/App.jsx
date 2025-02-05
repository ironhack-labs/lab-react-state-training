import "./App.css";
import Dice from './components/Dice';
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";


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
