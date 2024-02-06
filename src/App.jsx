import "./App.css";
import { useState } from "react";
import LikeButtons from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {


  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButtons></LikeButtons>
      <Counter></Counter>
      <ClickablePicture></ClickablePicture>
      <Dice></Dice>
      <DiscoButton></DiscoButton>
      <Carousel  images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"]}></Carousel>

      </div>
  );
}

export default App;
