// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import Product from "./components/dashboard/Product";
import Customer from "./components/dashboard/Customer";
import Transaction from "./components/dashboard/Transaction";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
// import Toaster from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { userExist } from "./redux/reducer/userReducer";

const App = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_SERVER}/api/v1/user/${user.uid}`
          );
          console.log(data.user);
          dispatch(userExist(data.user));
        } catch (error) {}
      }
    });
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />

        {/* admin dashboard  */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customer" element={<Customer />} />

        {/* error  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
