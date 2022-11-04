import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductList from "./pages/ProductList";
import Singleproduct from "./pages/Singleproduct";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Navbar />
                <Slider />
                <Categories />
                <Products />
              </div>
            }
          />

          <Route exact path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Singleproduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
