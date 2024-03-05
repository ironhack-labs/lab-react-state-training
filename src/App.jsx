import "./App.css";

import LikeButton from "./Components/LikeButton"
import Counter from "./Components/Counter";
import ClicklablePicture from "./Components/ClickablePicture"
import Dice from "./Components/Dice";

function App() {



  return (
    <div className="App">
      <h1> LAB | React Training</h1>

    <LikeButton />
    <LikeButton />
    <div> 

      <Counter />

    </div>
    <div>

    <ClicklablePicture />
    </div>
    <div>

    <Dice />
    </div>
    </div>
  );
}

export default App;
