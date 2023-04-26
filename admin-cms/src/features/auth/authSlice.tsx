import { createSlice } from "@reduxjs/toolkit";

type UserType = {
  name: string;
  email: string;
  password: string;
};

type InitialState = {
  auth?: boolean;
  isLoggedIn?: boolean;
  isLoggedOut?: boolean;
  isRegister?: boolean;
  user?: UserType;
};

const initialState: InitialState = {
  auth: false,
  isLoggedIn: false,
  isLoggedOut: false,
  isRegister: false,
  user: {
    name: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_REGISTER(state, action) {
      // state.isLoggedIn = action.payload
      state.user = action.payload;
      state.isRegister = true;
      state.auth = true;
    },
    SET_LOGOUT(state, action) {
      state.isLoggedOut = action.payload;
    },
  },
});

export const { SET_LOGIN, SET_REGISTER, SET_LOGOUT } = authSlice.actions;

export default authSlice.reducer;
