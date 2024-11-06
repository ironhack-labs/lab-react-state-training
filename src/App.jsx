import "./App.css";
import ClickeablePicture from "./components/ClickeablePicture/ClickeablePicture";
import Counter from "./components/Counter/Counter";
import Dice from "./components/Dice/Dice";
import Likebutton from "./components/likebutton/likebutton";

function App() {
  return (
    <div className="App">
      <Likebutton />
      <Counter />
      <ClickeablePicture />
      <Dice />
    </div>
  );
}

export default App;
