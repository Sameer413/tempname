// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import SharedLayout from "../components/Layouts/SharedLayout";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import ProductDetails from "./Product/ProductDetails";
import Products from "./Product/Products";
import Profile from "./User/Profile";
import MyOrders from "./User/MyOrders";
import Cart from "./Product/Cart";
import Checkout from "./Checkout/Checkout";

const Main = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/myorders" element={<MyOrders />} />
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                    <Route path={"/checkout"} element={<Checkout />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default Main;