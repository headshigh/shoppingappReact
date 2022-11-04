import React from "react";
import Navbar from "../components/Navbar";
import Cartproduct from "../components/Cartproduct";

function Cart() {
  return (
    <div className="cart__wrapper">
      <Navbar />
      <h1 className="text-5xl text-center mt-5 mb-7">Your Bag</h1>
      <div className="btns flex justify-between items-center px-5">
        <button className="px-3 py-2 bg-white border-2 border-black">
          Continue Shopping
        </button>
        <div className="flex gap-4 underline">
          <p>Shpopping Bag</p>
          <p>Your Wishlist</p>
        </div>
        <button className="px-3 py-2 bg-black text-white">Checkout Now</button>
      </div>
      <div className="rightleft flex px-5 mt-9 gap-7 ">
        <div className="left w-3/4 flex flex-col gap-2 pr-8">
          <Cartproduct />
          <Cartproduct />
        </div>
        <div className="summary w-1/4 py-5 px-3">
          {" "}
          <div className="summary flex flex-col gap-8 border p-3 rounded">
            <h1 className="text-3xl mb-3">ORDER SUMMARY</h1>
            <div className="flex justify-between">
              <h1>Subtotal:</h1>
              <h1>$80</h1>
            </div>
            <div className="flex justify-between">
              <h1>Estimated Shipping:</h1>
              <h1>$80</h1>
            </div>
            <div className="flex justify-between">
              <h1>Shipping Discount:</h1>
              <h1>$80</h1>
            </div>
            <div className="flex justify-between font-medium text-2xl">
              <h1>Total:</h1>
              <h1>$80</h1>
            </div>
            <button
              style={{ backgroundColor: "gray" }}
              className="px-2 py-1 max-w-max "
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
