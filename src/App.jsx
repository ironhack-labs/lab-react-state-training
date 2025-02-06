import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from './components/DiscoButton';



function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>like buttons</h2>
       <LikeButton />
       <h2>counter</h2>
       <Counter />
       <h2>Clickable picture</h2>
       <ClickablePicture />
       <h2>Roll dice </h2>
       <Dice />
       <DiscoButton />
     

    </div>
  );
}

export default App;
