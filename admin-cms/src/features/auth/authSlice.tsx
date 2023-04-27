import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authThunk from "./authThunk";

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
}

interface Credentials {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  user: {
    name: "",
    email: "",
    role: "",
    userId: "",
  },
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await authThunk.REGISTER_USER(credentials);
      return response as ServerResponse | void;
    } catch (error) {
      console.log("THUNK", error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await authThunk.LOGIN_USER(credentials);
      return response as IUser | void;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
        state.isAuthenticated = true;
        state.error = null;
        state.isLoading = false;
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
        state.user = action.payload as IUser;
        state.isAuthenticated = true;
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
