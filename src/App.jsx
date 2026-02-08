import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import ClickablePicture from "./component/ClickablePicture";
import Dice from "./component/Dice";


function App() {
  const [likes,setLikes] = useState(0)
  const handleLike = () => setLikes(likes => likes + 1)
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <button onClick={handleLike}>{likes}likes</button>
      <br/>
      <br/>
      <Counter/>
      <ClickablePicture/>

      <br />
      <br />
      <Dice/>
    </div>
  );
}

export default App;
