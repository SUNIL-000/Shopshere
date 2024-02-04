// import React from 'react'
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
// import { HiShoppingCart } from "react-icons/hi";

const ProductCard = () => {
  return (
    <>
      <div
        
        className="sm:max-w-sm my-5 col-span-1  flex flex-col bg-[#fffffff9] z-0 w-64 rounded overflow-hidden shadow-md hover:shadow-xl"
      >
        <div className="relative p-1">
          <img
            className=" w-full md:h-[260px] h-[250px] rounded "
            src={`https://randomwordgenerator.com/img/picture-generator/55e2d5444a5ba414f1dc8460962e33791c3ad6e04e5074417c2a79dd954ac2_640.jpg`}
            alt={""}
          />
          {/* <h1 className="absolute  top-1 text-2xl text-black drop-shadow-2xl right-0 mr-2"><IoHeartOutline /></h1> */}
        </div>

        <div className="px-2 py-2 relative">
          <div className="font-medium -tracking-wide hover:text-[#2E86C1]  text-md  mb-2">
            shoe
          </div>
          <p className=" font-bold text-md text-green-600">
            ₹{2000}{" "}
            <span className="float-end text-2xl ">
              <button type="button " className="hover:text-red-400 text-gray-600"> <BsCartPlusFill /> </button>
            </span>
            
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
