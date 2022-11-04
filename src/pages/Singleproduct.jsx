import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
function Singleproduct() {
  const [quantity, setquantity] = React.useState(1);
  return (
    <div>
      <Navbar />
      <div className="singlewrapper gap-9 flex px-6 mt-9 ">
        <div className="left flex-2">
          <img
            style={{ width: "1800px" }}
            className=""
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
          />
        </div>
        <div className="right flex flex-col">
          <h1 className="font-normal mb-4 text-3xl">Denim Jumpsuit</h1>
          <p className="text-xl leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            minus itaque laudantium neque molestias quae in maxime officia nam
            consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quis id iste assumenda eaque voluptatum, deserunt, molestias,
            eligendi odit accusantium explicabo possimus.
          </p>
          <h1 className="font-normal my-6 text-5xl">$20</h1>
          <div className="colorandselect flex items-center gap-3 ">
            <h1 className="text-xl">Colors</h1>
            <div className="flex">
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  margin: "0px 5px",
                  cursor: "pointer",
                }}
              ></div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "pink",
                  margin: "0px 5px",
                  cursor: "pointer",
                }}
              ></div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  margin: "0px 5px",
                  cursor: "pointer",
                }}
              ></div>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  margin: "0px 5px",
                  cursor: "pointer",
                }}
              ></div>
            </div>
            <div className="options gap-2 flex">
              <h1 className="text-2xl">Size</h1>
              <select className="px-3 py-2 border-black border">
                <option>S</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="quantity mt-3 flex gap-8">
            <div className="buttons font-medium  flex gap-2">
              <div
                onClick={() => {
                  setquantity((prev) => (prev > 1 ? prev - 1 : 1));
                }}
                className="text-3xl cursor-pointer"
              >
                -
              </div>
              <div className="px-3 flex items-center py-1 rounded-md border border-black">
                {quantity}
              </div>
              <div
                onClick={() => {
                  setquantity((prev) => prev + 1);
                }}
                className="text-3xl cursor-pointer"
              >
                +
              </div>
            </div>
            <div className="shopnow">
              <button className="border-2 border-black px-3 py-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
