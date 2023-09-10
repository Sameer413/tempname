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
import AdminSharedLay from "./Admin/AdminSharedLay";
import AdminDashboard from "./Admin/AdminDashboard";
import Users from "./Admin/Users";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import AdminProducts from "./Admin/AdminProducts";
import AdminOrders from "./Admin/AdminOrders";

const Main = (props) => {
    const { isAuthenticated, role } = props;



    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<SharedLayout isAuthenticated={isAuthenticated} role={role} />}>
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

                    <Route path={"/admin"} element={<AdminSharedLay />} >
                        <Route index element={<AdminDashboard />} />
                        <Route path="/admin/users" element={<Users />} />
                        <Route path="/admin/addproduct" element={<AddProduct />} />
                        <Route path="/admin/update/product" element={<UpdateProduct />} />
                        <Route path="/admin/products" element={<AdminProducts />} />
                        <Route path="/admin/orders" element={<AdminOrders />} />
                    </Route>
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default Main;