import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  APIResponse,
  AuthState,
  Credentials,
} from "../../interfaces/auth.interfaces";
import { RootState } from "../store";

// const authToken = JSON.stringify(localStorage.setItem("currentUser"));
// const currentUser = JSON.parse(token);
// const storedUser = localStorage.getItem("currentUser");
// console.log(storedUser ? "true" : "false");

// const user = storedUser ? JSON.parse(storedUser) : null;
// console.log({ currentUser });

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  error: null,
  msg: "",
  token: null,
  user: {
    name: "",
    email: "",
    role: "",
    userId: "",
  },
};
const API = process.env.SERVER_URL;

// POST REQUEST
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/auth/register`, credentials);
      // console.log("THUNK_RESPONSE_REGISTER", response);
      return response.data;
    } catch (error: any) {
      // console.log("THUNK_ERROR_REGISTER", error.response.data.ERROR);
      return thunkAPI.rejectWithValue(
        error?.response?.data?.ERROR || error?.data?.ERROR
      );
    }
  }
);

// GET REQUEST
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/auth/login`, credentials);
      // console.log("THUNK_RESPONSE_LOGIN", response);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error?.response.data?.ERROR || error?.response?.data
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_CREDENTIALS: (state, action: PayloadAction<APIResponse>) => {
      state.user = action.payload.data;
      state.msg = action.payload.msg;
    },
    LOGOUT_USER: (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
      state.msg = action.payload;
      localStorage.removeItem("currentUser");
      // removeToken();
    },
  },
  extraReducers: (builder) => {
    // REGISTER USER
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("PAYLOAD_FULLFILLED_REGISTER", action.payload);
        const { data, msg, token } = action.payload;
        const { name, email, role, userId } = action.payload.data;
        state.isAuthenticated = true;
        state.error = null;
        state.user.name = name;
        state.user.email = email;
        state.user.role = role;
        state.user.userId = userId;
        // state.user = { name, email, role, userId };
        state.token = action.payload;
        state.isLoading = false;
        state.msg = msg;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
        // setToken(JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        // console.log("REJECTED", action.payload);
        state.error = action.payload as any;
      })

      // LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, msg } = action.payload;
        console.log("PAYLOAD_FULLFILLED_LOGIN", action.payload);

        // state.isAuthenticated = true;
        // state.user = data;
        // state.msg = msg;
        // state.error = "";
        // state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        // console.log("REJECTED_LOGIN", action.payload);
        state.error = action.payload as any;
      });
  },
});

export const { LOGOUT_USER } = authSlice.actions;
// SELECTORS
export const hasToken = (state: RootState) => state?.auth.token;
export const authenticated = (state: RootState) => state?.auth?.isAuthenticated;

export const currentUser = (state: RootState) => state.auth.user;
export const msg = (state: RootState) => state.auth.msg;
export const error = (state: RootState) => state.auth.error;
export default authSlice.reducer;
