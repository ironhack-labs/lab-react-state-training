import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dogs from "./pages/Dogs.jsx";
import DogDetails from "./pages/DogDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Dice from "./components/Dice.jsx"; 

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogDetails />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

