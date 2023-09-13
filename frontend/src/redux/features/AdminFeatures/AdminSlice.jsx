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

export const adminGetProduct = createAsyncThunk(
    'admin/getProduct',
    async (id, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get(`http://localhost:5000/product/${id}`, {
                withCredentials: true
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const adminUpdateProduct = createAsyncThunk(
    'admin/updateProduct',
    async ({ id, credentials }, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.put(`http://localhost:5000/product/${id}`, JSON.stringify(credentials), {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const addProductAdmin = createAsyncThunk(
    'admin/addProduct',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post(
                'http://localhost:5000/product/new',
                credentials,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                }
            )
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

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
            .addCase(updateRole.fulfilled, (state) => {
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
            .addCase(adminGetProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adminGetProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(adminGetProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(adminUpdateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adminUpdateProduct.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(adminUpdateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(addProductAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductAdmin.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addProductAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

export default AdminSlice.reducer;