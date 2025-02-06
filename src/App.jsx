import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton></LikeButton>
      <LikeButton></LikeButton>
      <Counter></Counter>
      <ClickablePicture></ClickablePicture>
      <DiscoButton></DiscoButton>
      <DiscoButton></DiscoButton>
    </div>
  );
}

export default App;
