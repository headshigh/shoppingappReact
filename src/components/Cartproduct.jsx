import React from "react";

function Cartproduct() {
  return (
    <div className="cartproduct__wrapper border-b">
      <div className="flex justify-between">
        <div className="left flex gap-3">
          <img
            style={{ width: "200px" }}
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
            alt=""
          />
          <div className="productinfo flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="font-medium">Product:</span>
              <span>Goldstar premium shoes</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">ID:</span>
              <span>00998821</span>
            </div>
            <div
              style={{
                backgroundColor: "black",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
              }}
            ></div>
            <div className="flex gap-2">
              <span className="font-medium">Size</span>
              <span>37.5</span>
            </div>
          </div>
        </div>
        <div className="right flex gap-4 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex gap-1 font-medium text-2xl">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div className=" font-normal text-3xl">$30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartproduct;
