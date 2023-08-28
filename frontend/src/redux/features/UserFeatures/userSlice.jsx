import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// const url = "http://localhost:5000"
// Action for the reducer
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            console.log("hi there");
            const apiResponse = await axios.post(`/login`, credentials, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true,
            });
            console.log(apiResponse);
            return apiResponse.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
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
    }
});


export default userSlice.reducer;