import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { userData } from "../../../../server/src/interfaces/user.interfaces";
import { storedToken } from "../auth/authSlice";

const initialState = {
  users: [],
  name: "",
  role: "",
  count: 0,
  msg: null,
  loading: true,
  success: false,
  error: null,
  token: storedToken ? storedToken.replace(/"/g, "") : null,
};

const API = process.env.SERVER_URL;

export const currentUser = createAsyncThunk(
  "users/currentUser",
  async (_, thunkAPI) => {
    try {
      const currentToken = (thunkAPI.getState() as any).users.token;
      const response = await axios.get(`${API}/users/currentUser`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      return response.data;
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.msg) ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData: userData, thunkAPI) => {
    try {
      const currentToken = (thunkAPI.getState() as any).users.token;

      const response = await axios.patch(`${API}/users/updateUser`, userData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.msg) ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: string, thunkAPI) => {
    try {
      const token = (thunkAPI.getState() as any).users.token;
      const response = await axios.delete(`${API}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      // GET THE CURRENT USER
      .addCase(currentUser.pending, (state) => {
        state.loading = true;
        state.name = "";
        state.role = "";
      })

      .addCase(currentUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const currentUserMessage = action.payload.msg;
        const currentUserName = action.payload.data.name;
        const currentUserRole = action.payload.data.role;
        state.name = currentUserName;
        state.role = currentUserRole;
        state.msg = currentUserMessage;
        state.loading = false;
      })

      .addCase(currentUser.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload as any;
      })
      // GETTING ALL THE USERS
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        // console.log("PAYLOAD", action.payload);
        state.users = action.payload.users;
        state.loading = false;
        state.msg = action.payload.msg;
        state.count = action.payload.count;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      })
      // UPDATING THE USER
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
        toast.success(action.payload.msg);

        state.msg = action.payload.msg;
        state.count = action.payload.count;
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        // state.error = action.payload.msg as any;
      })
      // DELETING  THE USER
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log("PAYLOAD", action.payload);
        state.loading = false;
        state.msg = action.payload.msg;
        state.count = action.payload.count;
        toast.success(action.payload.msg);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});

export const { SET_USERS } = userSlice.actions;
export default userSlice.reducer;
