import "./App.css";
import LikeBtn from './components/LikeButton.jsx';
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Dice from "./components/Dice.jsx";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeBtn/>
      <Counter />
      <ClickablePicture/>
      <Dice/>
    </div>
  );
}
export default App;
