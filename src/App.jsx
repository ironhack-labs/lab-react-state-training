import "./App.css";

import LikeButton from "./component/LikeButton"
import Counter from "./component/Counter"
import ClickAblePicture from "./component/ClickAblePicture";
import Dice from "./component/Dice";

function App() {

  return (
    <section className="App">
      <h1> LAB | React Training</h1>

      <LikeButton/>
      <br/>
      <Counter/>
      <br/>
      <ClickAblePicture/>
      <br/>
      <Dice/>
      
    </section>
  );
}

export default App;