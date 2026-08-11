import "./App.css";
import Like from "./components/Like";
import Counter from "./components/Counter";
import PictureClick from "./components/Pictureclick";
import Dice from "./components/Dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Like />
      <Counter />
      <PictureClick />
      <Dice/>
      
      
    </div>
  );
}

export default App;
