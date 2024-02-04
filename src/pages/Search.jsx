// import React from 'react'
import ProductCard from "../components/ProductCard";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between item-center md:items-start gap-5 w-full  px-5">
        <div className="md:w-1/5 bg-white h-auto  shadow-xl rounded-lg px-4 text-center py-10">
          <h1 className="text-black font-bold text-center uppercase text-2xl drop-shadow-xl">
            filter
          </h1>
          <select className="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none  ">
            <option selected disabled>
              Sort
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className="flex items-center">
            <label htmlFor="range" className="mr-2">
              0
            </label>
            <input
              type="range"
              id="range"
              name="range"
              min={0}
              max={100}
              step={2}
              defaultValue={50}
              className="appearance-none w-full h-2 bg-gray-200 rounded-full outline-none"
            />
            <span className="ml-2 text-gray-700">50</span>
          </div>

          <select className="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none  ">
            <option selected disabled>
              Category
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="md:w-4/5  h-auto mx-auto md:min-h-screen  flex flex-wrap flex-col  ">
          <div className=" flex justify-center items-center flex-wrap text-2xl font-bold   w-[90%] mx-auto ">
              <span className="bg-white p-2.5 rounded-md"><IoSearch /></span>
              <input type="search" name="" className="p-2 text-lg rounded-md border-none focus:border-none focus:outline-none focus:ring-white" id="" placeholder="Search Product" />
          </div>
          <div className="md:full  h-auto mx-auto md:min-h-screen rounded-lg px-8 py-5 flex flex-wrap gap-0 md:gap-3  justify-evenly">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
