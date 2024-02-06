import React from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const products = [
  {
    id: "1",
    name: "Macbook",
    price: 89999,
    stock: 4,
    photo: "/trolley.png",
    category: "Laptop",
  },
  {
    id: "2",
    name: "Canon m50 mark II",
    price: 59999,
    stock: 5,
    photo: "/trolley.png",
    category: "Camera",
  },
  {
    id: "3",
    name: "VALORANT",
    price: 2000,
    stock: 5,
    photo: "/trolley.png",
    category: "Game",
  },
];
const Product = () => {
  return (
    <section className="w-full p-1 flex h-full justify-evenly gap-3 ">
      <SideBar />
      <main className="w-4/5 my-3">
        <div className="overflow-x-auto relative">
          <h1 className="font-bold text-gray-600 mx-auto text-center text-2xl">
            PRODUCTS
          </h1>

          <Link to={"/admin/newproduct"} className=" text-2xl hover:text-[#ffffffbf] text-white absolute top-0 left-0">
            <FaPlus style={{ background: "red", padding :"4px",borderRadius:"50%"}} />
          </Link>
          <table className="min-w-full bg-white  border-gray-300">
            <thead>
              <tr>
                <th className="py-4 uppercase px-4 border-b text-left">
                  Photo
                </th>
                <th className="py-4 uppercase px-4 border-b text-left">Name</th>
                <th className="py-4 uppercase px-4 border-b text-left">
                  Price
                </th>
                <th className="py-4 uppercase px-4 border-b text-left">
                  Stock
                </th>
                <th className="py-4 uppercase px-4 border-b text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="">
                  <td className="py-4 px-4 border-b text-center">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="py-2 text-gray-600 font-semibold px-4 border-b text-left">
                    {product.name}
                  </td>
                  <td className="py-2 text-gray-700 font-medium px-4 border-b text-left">
                    ₹{product.price}
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    {product.stock}
                  </td>
                  <td className="py-2 px-4 border-b text-left">
                    <Link
                      className="   text-red-700 hover:text-red-400 text-3xl font-bold py-2 px-4 rounded"
                      onClick={() => handleManageClick(product.id)}
                    >
                      <MdManageAccounts />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default Product;
