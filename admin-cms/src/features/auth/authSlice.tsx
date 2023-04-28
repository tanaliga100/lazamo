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
  error: string | null;
  user: IUser;
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
  error: null,
  msg: "",
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
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
    },
    LOGOUT_USER: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER USER
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { data, msg } = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.user = data;
        state.isLoading = false;
        state.msg = msg;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as null;
      })

      // LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { data, msg } = action.payload;
        state.isAuthenticated = true;
        state.user = data;
        state.msg = msg;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as null;
      });
  },
});

export const { LOGOUT_USER } = authSlice.actions;
export default authSlice.reducer;
