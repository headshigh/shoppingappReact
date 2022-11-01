import React from "react";
import { categories } from "../data";

function Categories() {
  const mapped = categories.map((item) => {
    return (
      <div
        style={{
          height: "70vh",
          //   backgroundImage: `url(${item.img})`,
          //   backgroundRepeat: "no-repeat",
        }}
        className="relative flex  "
      >
        <img className="object-cover h-full  " src={item.img} alt="" />
        <div
          style={{ justifyContent: "center" }}
          className=" info absolute h-full w-full top-0 left-0 flex flex-col justify-content-center items-center"
        >
          <h1 className="  text-white font-normal  text-3xl">{item.title}</h1>
          <button className="px-4 bg-white     py-2    ">Shop Now</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="categores__wrapper flex justify-between   py-2.5 px-5 mt-5  ">
        {mapped}
      </div>
    </div>
  );
}

export default Categories;
