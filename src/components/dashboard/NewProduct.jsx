import React, { useState } from "react";
import SideBar from "./SideBar";
// import { useCreateProductMutation } from "../../redux/api/productApi";
import toast from "react-hot-toast";
import axios from "axios";

// 
const NewProduct = () => {
  // const [createProduct] =useCreateProductMutation();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    photo: null,
  });
  const [phtPrev, setPhtPrev] = useState("");
  const reader = new FileReader();
  if (formData?.photo) {
    reader.readAsDataURL(formData?.photo),
      (reader.onloadend = () => {
        if (typeof reader.result === "string") setPhtPrev(reader.result);
      });
  }

  console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, stock, category, photo } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("price", price);
    formDataToSend.append("stock", stock);
    formDataToSend.append("category", category);
    photo && formDataToSend.append("photo", photo);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/v1/product/new`,
        formDataToSend, // Pass formDataToSend directly
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
        
      console.log(data);
      toast.success(data?.message)
      // Handle success or display error messages
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      <section className="w-full p-1 flex h-full justify-evenly gap-3 ">
        <SideBar />
        <main className="w-4/5 my-3  flex justify-center items-center ">
          <div className="w-full max-w-xs flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
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
                  name="name"
                  value={formData.name}
                  //
                  onChange={handleInputChange}
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
                  name="price"
                  value={formData.price}
                  //
                  onChange={handleInputChange}
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
                  name="stock"
                  value={formData.stock}
                  //
                  onChange={handleInputChange}
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
                  name="category"
                  value={formData.category}
                  //
                  onChange={handleInputChange}
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
                  name="photo"
                  //   value={photo}/
                  //
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                  placeholder="photo"
                />
              </div>
              {phtPrev && (
                <img
                  src={phtPrev}
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
