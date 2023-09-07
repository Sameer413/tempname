import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post(`http://localhost:5000/cart/new/${credentials}`,
                {},
                {
                    withCredentials: true
                });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const cartProducts = createAsyncThunk(
    'cart/allCartProduct',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/cart', { withCredentials: true });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateCarQuantity = createAsyncThunk(
    'cart/updateQuantity',
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            console.log(productId, "  sdfjlj", quantity);
            const apiResponse = await axios.put(`http://localhost:5000/cart/update/${productId}`, {
                qty: quantity
            }, {
                withCredentials: true
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const removeCartProduct = createAsyncThunk(
    'cart/deleteProduct',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.delete(`http://localhost:5000/cart/delete/${credentials}`, { withCredentials: true });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalPrice: 0,
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.msg
            })
            .addCase(cartProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(cartProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
                state.totalPrice = action.payload.totalPrice;
            })
            .addCase(cartProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.msg;
            })
            .addCase(updateCarQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCarQuantity.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updateCarQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log(action.error);
            })
            .addCase(removeCartProduct.pending, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(removeCartProduct.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(removeCartProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

    }
});

export default cartSlice.reducer;