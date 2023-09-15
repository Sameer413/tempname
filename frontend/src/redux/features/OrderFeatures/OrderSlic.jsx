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

export const userOrder = createAsyncThunk(
    'user/myOrders',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get("http://localhost:5000/me/orders", { withCredentials: true });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const adminOrder = createAsyncThunk(
    'admin/orders',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get("http://localhost:5000/orders", { withCredentials: true });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const updateOrderStatus = createAsyncThunk(
    'admin/updateStatus',
    async ({ id, status }, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.put(`http://localhost:5000/order/${id}`, {
                status: status,
            }, {
                withCredentials: true
            });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const OrderSlice = createSlice({
    name: "order",
    initialState: {
        loading: false,
        orders: null,
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
                state.orders = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(userOrder.pending, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(userOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(userOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(adminOrder.pending, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(adminOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(adminOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateOrderStatus.pending, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default OrderSlice.reducer