import "./App.css";
import LikeBtn from "./components/LikeBtn";
import Counter from "./components/Counter";
import ClickableImg from "./components/ClickableImg";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeBtn />
      <Counter />
      <ClickableImg />
    </div>
  );
}

export default App;
