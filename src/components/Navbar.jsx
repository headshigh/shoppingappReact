import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar__container flex items-center py-2.5 px-5 justify-between ">
        <div className="left">
          <input type="text" className="border-2" />
        </div>
        <div className="middle">
          <h1 className="font-extrabold text-4xl tracking-wider">Devshop</h1>
        </div>
        <div className="right flex gap-10 items-center justify-between">
          <Link className="font-normal text-lg" to="signin">
            <div> SIGN</div>
          </Link>

          <Link to="register">
            <h1 className="font-normal text-lg">REGISTER</h1>
          </Link>
          <Link to="cart">
            <Icon
              className="text-xl border-black"
              icon="ant-design:shopping-cart-outlined"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
