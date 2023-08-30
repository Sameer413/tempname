import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
    'product/addToCart',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post(`http://localhost:5000/cart/new/${credentials}`,
                {},
                {
                    withCredentials: true
                });

            return apiResponse.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.msg
            })
    }
});

export default cartSlice.reducer;