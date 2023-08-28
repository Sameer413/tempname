import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/UserFeatures/userSlice";
import productSlice from "./features/ProductFeatures/productSlice";
// import { userReducer } from "./Reducer/userReducer";


const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice
    }
});

export default store;