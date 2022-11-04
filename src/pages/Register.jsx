import React from "react";
import css from "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register__wrapper  flex justify-center items-center">
      <div className="signin__wrapper py-5  bg-white ">
        <form style={{ width: "85%" }} className=" ">
          <h1 className="text-3xl mb-5">SIGN IN</h1>
          <div className="flex justify-center flex-col">
            <input
              placeholder="username"
              className="border-gray-600 border px-2 py-2 "
              type="text"
            />
          </div>
          <div className="flex justify-center flex-col">
            <input
              placeholder="password"
              className="border px-2 py-2 border-gray-600 mt-8"
              type="text"
            />
          </div>
          <button className="btn mt-5" type="">
            Sign In
          </button>
          <Link to="/login">
            <h1 className="mt-3 underline decoration-1	">
              Already have a account? Login
            </h1>
          </Link>
        </form>{" "}
      </div>
    </div>
  );
}

export default Register;
