import LikeButton from "./components/likeButton";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickablePicture";
import Dice from "./components/dice";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton /> <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      
      

    </div>
  );
}

export default App;