import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
import ProductReducer from "./products/productSlice";
import UserReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    users: UserReducer,
    products: ProductReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// TYPESCRIPT TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
