import "./App.css";
import Likebutton from "./Components/Likebutton";
import Counter from "./Components/Counter";
import Clickable from "./Components/Clickkable";
import Dice from "./Components/Dice";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Likebutton/>
      <div>
      <Counter/>
    </div>
    <div>
      <Clickable/>
    </div>
    <div>
      <Dice/>
    </div>
    </div>
    
  
  );
}

export default App;
