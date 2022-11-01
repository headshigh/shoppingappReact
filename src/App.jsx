import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Slider />
        <Categories />
        <Products />
      </BrowserRouter>
    </div>
  );
}

export default App;
