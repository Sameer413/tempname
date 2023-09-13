import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/UserFeatures/userSlice";
import productSlice from "./features/ProductFeatures/productSlice";
import cartSlice from "./features/ProductFeatures/cartSlice";
import adminSlice from "./features/AdminFeatures/AdminSlice";
import OrderSlic from "./features/OrderFeatures/OrderSlic";


const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice,
        admin: adminSlice,
        order: OrderSlic,
    }
});

export default store;
