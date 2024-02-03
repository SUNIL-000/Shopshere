// import React from 'react'
// import { Link } from 'react-router-dom'
// import { BsCartPlusFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

const ProductCard = () => {
  return (
    <>
      {/* <div class="relative m-7 col-span-1  w-full max-w-xs   overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to="#">
                    <img class="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                </Link>
                <div class="mt-4 px-5 pb-3">
                    <p>
                        <h4 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h4>
                    </p>
                    <div class="mt-2 mb-4 flex items-center justify-between">
                        <p>
                            <span class="text-2xl font-bold text-slate-900">₹449</span>
                        </p>

                    </div>
                    <button href="#" class=" float-end rounded-full flex my-1 items-center justify-center  gap-1 bg-[#323232] px-5 py-2 text-center text-sm font-medium text-white hover:bg-[black] ">

                        <BsCartPlusFill style={{ fontSize: "18px" }} />

                    </button>
                </div>
            </div> */}
      <div className="card md:w-1/4 w-3/4 h-70 bg-base-100 shadow-xl skeleton z-0  ">
        <figure>
          <img
            src="data:image/jpeg;base64,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"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-[1rem] bg-white rounded-xl text-black">
          <p>adidas mountain running</p>
          <h2 className="card-title ">₹400</h2>
          <div className="card-actions justify-end">
            <button className="btn px-2 py-0 capitalize text-2xl">
              <HiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
