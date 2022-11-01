import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { sliderItems } from "../data";

function Slider() {
  // console.log(sliderItems);
  const mapped = sliderItems.map((items) => {
    return (
      <div
        style={{ backgroundColor: items.bg }}
        className="h-screen  flex gap-5 mx-2 "
      >
        <img className="w-1/2" src={items.img} alt="" />
        <div className="text flex flex-col justify-center ">
          <h1 className="text-8xl font-bold tracking-wide">{items.title}</h1>
          <p className="mt-6 text-3xl tracking-wider font-normal">
            {items.desc}
          </p>
          <button className="max-w-fit mt-8 px-5 py-2  border-black border-2 text-lg">
            Shop Now
          </button>
        </div>
      </div>
    );
  });
  console.log(mapped);
  return (
    <div>
      <Glider
        className=""
        draggable
        hasDots
        slidesToShow={1}
        slidesToScroll={1}
      >
        {mapped}
      </Glider>
    </div>
  );
}

export default Slider;
