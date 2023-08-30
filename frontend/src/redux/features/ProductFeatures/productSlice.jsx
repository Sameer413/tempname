import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/products');
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchProductD = createAsyncThunk(
    'product/fetchProductD',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get(`http://localhost:5000/product/${credentials}`, {
                withCredentials: true
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

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

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        product: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductD.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductD.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductD.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
    }
});

export default productSlice.reducer;