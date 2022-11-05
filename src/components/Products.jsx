import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import { Icon } from "@iconify/react";
import css from "../products.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Products({ cat, filters, sort }) {
  const [data, setData] = useState([]);
  console.log(sort);
  if (sort == "newest") {
    var sortText = "createdAt";
  }
  if (sort == "Price (asc)") {
    sortText = "price";
  } else {
    sortText = "-price";
  }
  const color = filters.color;
  console.log(sortText);
  useEffect(() => {
    const getdata = async () => {
      try {
        const array = await axios.get(
          cat
            ? `http://localhost:3000/api/product?category=${
                filters.category
              }&color=${filters.color.toLowerCase()}&size=${filters.size.toLowerCase()}&sort=${sortText}`
            : "http://localhost:5000/api/product"
        );
        // console.log(array.data.products);
        setData(array.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, [filters, sort]);
  console.log(data);
  const mapped = data.map((item) => {
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
            className="icon p-3"
          />
          {/* <div className="relative"> */}
          <Icon
            className="icon p-3"
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
            className=" icon p-3"
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
