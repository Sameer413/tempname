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
import ProtectedRoutes from "../components/ProtectedRoutes";

const Main = (props) => {
    const { isAuthenticated, role } = props;

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<SharedLayout isAuthenticated={isAuthenticated} role={role} />}>

                        <Route index element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/products" element={<Products />} />

                        <Route
                            path="/login"
                            element={
                                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                                    <Login />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                                    <SignUp />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated}>
                                    <Profile />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/myorders"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated}>
                                    <MyOrders />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated}>
                                    <Cart />
                                </ProtectedRoutes>
                            }
                        />

                    </Route>

                    <Route
                        path={"/checkout"}
                        element={
                            <ProtectedRoutes isAuthenticated={!isAuthenticated}>
                                <Checkout />
                            </ProtectedRoutes>

                        }
                    />

                    <Route path={"/admin"} element={<AdminSharedLay />} >

                        <Route
                            index
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <AdminDashboard />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/admin/users"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <Users />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/admin/addproduct"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <AddProduct />
                                </ProtectedRoutes>

                            }
                        />
                        <Route
                            path="/admin/update/product/:id"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <UpdateProduct />
                                </ProtectedRoutes>

                            }
                        />
                        <Route
                            path="/admin/products"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <AdminProducts />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/admin/orders"
                            element={
                                <ProtectedRoutes isAuthenticated={!isAuthenticated} role={role}>
                                    <AdminOrders />
                                </ProtectedRoutes>
                            }
                        />

                    </Route>
                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default Main;