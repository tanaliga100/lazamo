import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
import ProductReducer from "./products/productSlice";
export const TestReducer = () => {
  return null;
};
export const store = configureStore({
  reducer: {
    test: TestReducer,
    auth: AuthReducer,
    products: ProductReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
