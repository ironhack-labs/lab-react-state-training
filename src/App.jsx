import "./App.css";
import LikeButton from "./component/LikeButton";
import Counter from "./component/Counter";
import ClickablePicture from "./component/ClickablePicture ";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
