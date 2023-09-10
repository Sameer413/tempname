import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// const url = "http://localhost:5000"
// Action for the reducer
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post(`http://localhost:5000/login`, credentials, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true,
            });

            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.post(`http://localhost:5000/register`, credentials, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true
            });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const logoutUser = createAsyncThunk(
    // This must be unique for each case
    'user/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/logout', {
                withCredentials: true
            });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const userMe = createAsyncThunk(
    'user/me',
    async (_, { rejectWithValue }) => {
        try {
            const apiResponse = await axios.get('http://localhost:5000/me', { withCredentials: true });
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload ? action.payload.message : 'Login Failed';
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Logout Failed'
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload ? action.payload.message : 'Failed to Register';
            })
            .addCase(userMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userMe.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(userMe.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload ? action.payload.message : 'Failed to Load User';
            })
    }
});


export default userSlice.reducer;