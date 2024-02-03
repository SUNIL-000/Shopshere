// import React from 'react'
import { Link } from 'react-router-dom'
// import {FaArror} from 'react-icons'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const CartDetails = () => {
    return (
        <div className="w-3/4  shadow-lg rounded bg-[white] px-10 py-10">

            <div className="flex w-[80%] mt-2 justify-between mb-5 bg-white px-3">
                <h1 className="font-semibold text-gray-600  uppercase ">Product Details</h1>
                <h1 className="font-semibold  text-gray-600  uppercase  text-center">Quantity</h1>
                <h1 className="font-semibold  text-gray-600  uppercase  text-center">Price</h1>

            </div>
            <div className="flex w-[80%] items-center justify-between hover:bg-gray-100  py-5 px-3">
                <div className="flex "> {/* product */}
                    <div className="w-20">
                        <img className="h-24" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">Iphone 6S</span>
                        <span className="text-red-500 text-xs">Apple</span>
                        <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <span className=' px-1 bg-white text-lg'><button><FaMinus /></button></span>
                    <span className=' text-lg'>1</span>
                    <span className=' px-1 bg-white'><button><FaPlus /></button></span>

                </div>
                <span className="text-center  font-semibold text-sm">₹600</span>

            </div>

            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
            </Link>
        </div>
    )
}

export default CartDetails