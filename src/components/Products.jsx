import React from "react";
import { popularProducts } from "../data";
import { Icon } from "@iconify/react";
import css from "../products.css";
function Products() {
  const mapped = popularProducts.map((item) => {
    return (
      <div
        key={item.id}
        style={{ height: "500px" }}
        className="flex relative flex justify-center object-cover "
      >
        <img className="w-full object-cover" src={item.img} alt="" />

        <div className="info   z-20 flex gap-2 absolute w-full h-full justify-center items-center">
          <Icon
            style={{ backgroundColor: "white", borderRadius: "50px" }}
            width="50px"
            icon="akar-icons:search"
            className="p-3"
          />
          {/* <div className="relative"> */}
          <Icon
            className="p-3"
            style={{ backgroundColor: "white", borderRadius: "50px" }}
            width="50px"
            icon="akar-icons:heart"
          />
          {/* <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                backgroundColor: "white",
                zIndex: "1",
              }}
              className=" flex justify-center items-center"
            ></div> */}
          {/* </div> */}

          <Icon
            style={{ backgroundColor: "white", borderRadius: "50px" }}
            width="50px"
            className="p-3"
            icon="ant-design:shopping-cart-outlined"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-4 mt-9 overflow-hidden gap-x-2 ">
      {" "}
      {mapped}
    </div>
  );
}

export default Products;
