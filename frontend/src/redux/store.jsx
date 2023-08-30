import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/UserFeatures/userSlice";
import productSlice from "./features/ProductFeatures/productSlice";
import cartSlice from "./features/ProductFeatures/cartSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice,
    }
});

export default store;
