import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (credential, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post('http://localhost:5000/order/create', credential, {
                withCredentials: true,
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const OrderSlice = createSlice({
    name: "order",
    initialState: {
        loading: false,
        order: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.order = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default OrderSlice.reducer