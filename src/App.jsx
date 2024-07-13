import "./App.css";

import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <ClickablePicture/>
      <Dice />

     

      

    </div>
  );
}

export default App;
