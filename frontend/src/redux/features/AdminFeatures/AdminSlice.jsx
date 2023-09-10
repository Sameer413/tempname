import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const allusers = createAsyncThunk(
    'admin/users',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/admin/users', { withCredentials: true })

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
);

export const updateRole = createAsyncThunk(
    'admin/roleUpdate',
    async ({ role, user }, { rejectWithValue }) => {
        try {
            const apiRsponse = await axios.put('http://localhost:5000/admin/users/role', {
                role: role,
                user: user,
            }, {
                withCredentials: true,
            });

            return apiRsponse.data;
        } catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
)

export const adminProducts = createAsyncThunk(
    'admin/products',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/admin/products', { withCredentials: true })

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
);

const AdminSlice = createSlice({
    name: "Admin",
    initialState: {
        product: null,
        users: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allusers.pending, (state) => {
                state.loading = true;
            })
            .addCase(allusers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(allusers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateRole.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateRole.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updateRole.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(adminProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(adminProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
});

export default AdminSlice.reducer;