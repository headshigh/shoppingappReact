import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetch = async () => {
        const data = await axios.get("http://localhost:3000/api/product");
        console.log(data.data.products);
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
    // setProducts(data);
  }, [1]);

  return <div className="text-3xl  bg-black text-white">Home</div>;
}

export default Home;
