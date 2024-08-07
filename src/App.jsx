import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Header/> <Header/>
      
      <Counter/>

      <ClickablePicture/>

    </div>
  );
}

export default App;
