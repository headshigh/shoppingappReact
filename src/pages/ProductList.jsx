import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

function ProductList() {
  return (
    <div className="px-5">
      <Navbar />
      <div className="px-5 ">
        <h1 className="font-bold text-4xl mt-6 mb-20 tracking-wider">
          Dresses
        </h1>
        <div className="findone__container mt-8 mb-12 flex justify-between items-center">
          <div className="right flex gap-3 items-center ">
            <h1 className="text-3xl font-medium">Filter Products:</h1>
            <select className="p-3 border border-black">
              <option disabled selected>
                Color
              </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Blue</option>
            </select>
            <select className="p-3 border border-black">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="left flex gap-3">
            <h1 className="text-3xl font-medium">Sort Products:</h1>
            <select className="p-3 border border-black">
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default ProductList;
