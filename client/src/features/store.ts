import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./products/productSlice";
export const TestReducer = () => {
  return null;
};
export const store = configureStore({
  reducer: {
    test: TestReducer,
    products: ProductReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
