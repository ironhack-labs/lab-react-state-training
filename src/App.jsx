import "./App.css";

import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <div className="container1">
        <LikeButton />
        <LikeButton />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <ClickablePicture />
      </div>
    </div>
  );
}

export default App;
