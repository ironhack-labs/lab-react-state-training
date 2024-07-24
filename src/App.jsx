import Likebutton from "./Components/Likebutton";
import "./App.css";
import Counter from "./Counter";
import Clickablepic from "./Components/Clickablepic";
import Dice from "./Components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Likebutton/>
      <Likebutton/>
      <br />
      <br />
      <Counter/>
      <br />
      <br />
      <Clickablepic/>
      <br />
      <br />

    <Dice/>

    </div>
  );
}

export default App;
