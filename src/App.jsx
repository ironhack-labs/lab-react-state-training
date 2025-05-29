import "./App.css";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>
      <div>
        <LikeButton initialCount={0} />
      </div>
      <div className="p-2">
        <Counter />
      </div>
      <div>
        <ClickablePicture />
      </div>
    </>
  );
}

export default App;
