import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUser {
  name?: string;
  email?: string;
  role?: string;
  userId?: string;
}

interface ServerResponse {
  msg: string;
  token: string;
  data: {
    name: string;
    userId: string;
    role: string;
    email: string;
  };
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: "";
  user: IUser;
  token: string;
  msg?: string;
}

interface Credentials {
  name?: string;
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: "",
  msg: "",
  token: localStorage.getItem("token") || "",
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
      console.log("THUNK_RESPONSE_REGISTER", response);
      localStorage.setItem("token", response.data.token);
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
      console.log("THUNK_RESPONSE_LOGIN", response);
      localStorage.setItem("token", response.data.token);

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
    SERVER_RESPONSE: (state, action: PayloadAction<ServerResponse>) => {
      state.user = action.payload.data;
      state.msg = action.payload.msg;
      state.token = action.payload.token;
    },
    LOGOUT_USER: (state) => {
      state.isAuthenticated = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER USER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("PAYLOAD_FULLFILLED", action.payload);
        const { data, msg, token } = action.payload;
        state.isAuthenticated = true;
        state.error = "";
        state.user = data;
        state.isLoading = false;
        state.msg = msg;
        state.token = token;
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
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, msg } = action.payload;
        state.isAuthenticated = true;
        state.user = data;
        state.msg = msg;
        state.error = "";
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        // console.log("REJECTED_LOGIN", action.payload);
        state.error = action.payload as any;
      });
  },
});

export const { LOGOUT_USER } = authSlice.actions;
export default authSlice.reducer;
