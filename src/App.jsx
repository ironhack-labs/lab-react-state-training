import "./App.css";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Counter from "./components/Counter/Counter";
import Dice from "./components/Dice/Dice";
import DiscoBtn from "./components/DiscoBtn/DiscoBtn";
import LikeBtn from "./components/LikeBtn/LikeBtn";

function App() {
  return (
    <div className="App">
      <LikeBtn />
      <hr />
      <Counter />
      <hr />
      <ClickablePicture />
      <hr />
      <Dice />
      <hr />
      <DiscoBtn />
    </div>
  );
}

export default App;
