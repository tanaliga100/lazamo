import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { storedToken } from "../auth/authSlice";

const initialState = {
  users: [],
  count: 0,
  msg: null,
  loading: true,
  success: false,
  error: null,
  token: storedToken ? storedToken.replace(/"/g, "") : null,
};

const API = process.env.SERVER_URL;

console.log("TOKEN FROM USERSLICE", initialState);

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const currentToken = (thunkAPI.getState() as any).users.token;
      const config = {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      };
      const response = await axios.get(`${API}/users`, config);
      return response.data;
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.msg) ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_USERS: (state, action) => {
      // console.log("PAYLOAD_ALL_USERS", action.payload);
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        console.log("PAYLOAD", action.payload);
        state.users = action.payload.users;
        state.loading = false;
        state.msg = action.payload.msg;
        state.count = action.payload.count;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});

export const { SET_USERS } = userSlice.actions;
export default userSlice.reducer;
