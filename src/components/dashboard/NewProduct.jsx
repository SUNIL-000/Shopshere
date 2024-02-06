import React, { useState } from "react";
import SideBar from "./SideBar";
import { useCreateProductMutation } from "../../redux/api/productApi";
import toast from "react-hot-toast";
import axios from "axios";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [photo, setphoto] = useState(null);
  // const [createProduct] = useCreateProductMutation();

  const onfileChange = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file),
        (reader.onloadend = () => {
          if (typeof reader.result === "string") setphoto(reader.result);
        });
    }
  };

  const productSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("price", price.toString());
      formdata.append("stock", stock.toString());
      formdata.append("category", category);
      formdata.append("photo", photo);
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/v1/product/new`,
        {formdata}
      );
      console.log(data);
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="w-full p-1 flex h-full justify-evenly gap-3 ">
        <SideBar />
        <main className="w-4/5 my-3  flex justify-center items-center ">
          <div className="w-full max-w-xs flex justify-center items-center">
            <form
              onSubmit={productSubmitHandler}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h1 className="font-bold text-black drop-shadow-md -tracking-wide uppercase mx-auto text-center text-2xl">
                new PRODUCT
              </h1>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="productname"
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="productname"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Price"
                />
              </div>{" "}
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="stock"
                  type="text"
                  placeholder="Stock"
                />
              </div>{" "}
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  type="text"
                  placeholder="Category"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="photo"
                >
                  photo
                </label>
                <input
                  //   value={photo}/
                  onChange={onfileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                  placeholder="photo"
                />
              </div>
              {photo && (
                <img
                  src={photo}
                  alt="newaimge"
                  className="w-20 h-20 text-center mx-auto"
                />
              )}
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#DA5143] mx-auto mt-1 hover:bg-[#bf4739] uppercase text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default NewProduct;
