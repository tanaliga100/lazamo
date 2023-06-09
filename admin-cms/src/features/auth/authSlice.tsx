import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthState, Credentials } from "../../interfaces/auth.interfaces";
import { RootState } from "../store";

export const storedUser = localStorage.getItem("currentUser");
export const storedToken = localStorage.getItem("token");

const initialState: AuthState = {
  isAuthenticated: storedUser && storedToken ? true : false,
  isLoading: false,
  isError: false,
  error: "" || null,
  msg: "",
  token: storedToken || null,
  user: storedUser
    ? JSON.parse(storedUser)
    : {
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
      // toast.success(response.data.msg);
      return response.data;
    } catch (error: any) {
      // console.log("THUNK_ERROR_REGISTER", error.response.data.msg);
      const message =
        (error.message && error.response.data && error.response.data.msg) ||
        error.toString();
      // toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// POST REQUEST
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/auth/login`, credentials);
      // console.log("THUNK_RESPONSE_LOGIN", response);
      // toast.success(response.data.msg);
      return response.data;
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.msg) ||
        error.toString();
      // toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGOUT_USER: (state, action) => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.token = null;
      state.user = {
        name: "",
        email: "",
        role: "",
        userId: "",
      };
      state.msg = action.payload;
      toast.success(action.payload);
    },
  },
  extraReducers: (builder) => {
    // REGISTER USER
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = "" || null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // console.log("PAYLOAD_FULLFILLED_REGISTER", action.payload);
        const { data, msg, token } = action.payload;
        const { name, email, role, userId } = action.payload.data;

        state.error = "" || null;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.msg = msg;
        state.user.name = name;
        state.user.email = email;
        state.user.role = role;
        state.user.userId = userId;
        state.token = token;
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(token));
        toast.success(msg);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })

      // LOGIN USER
      .addCase(loginUser.pending, (state, action) => {
        // console.log("PAYLOAD_PENDING_LOGIN", action.payload);
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = "" || null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log("PAYLOAD_FULLFILLED_LOGIN", action.payload);
        const { data, msg, token } = action.payload;
        const { name, email, role, userId } = action.payload.data;

        state.error = "" || null;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.msg = msg;
        state.user.name = name;
        state.user.email = email;
        state.user.role = role;
        state.user.userId = userId;
        state.token = token;
        toast.success(msg);
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(token));
      })
      .addCase(loginUser.rejected, (state, action) => {
        // console.log("PAYLOAD_REJECTED_LOGIN", action.payload);
        state.isLoading = false;
        // console.log("REJECTED_LOGIN", action.payload);
        state.isAuthenticated = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
        toast.error("Please Sign Up");
      });
  },
});

export const { LOGOUT_USER } = authSlice.actions;
// SELECTORS
export const hasToken = (state: RootState) => state?.auth.token;
export const authenticated = (state: RootState) => state?.auth?.isAuthenticated;

// export const currentUser = (state: RootState) => state.auth.user;
export const msg = (state: RootState) => state.auth.msg;
export const error = (state: RootState) => state.auth.error;
export default authSlice.reducer;
