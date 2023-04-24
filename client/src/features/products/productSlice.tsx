import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsThunk from "./productThunk";

type State = {
  product: any | null;
  products: any;
  featured: [];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};

const initialState: State = {
  product: null,
  products: [],
  featured: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    SET_PRODUCT(state, action) {
      state.product = action.payload;
    },
    GET_ALL_PRODUCTS(state, action) {
      state.products = action.payload;
    },
    GET_FEATURED_PRODUCTS(state) {
      const featuredProducts = state.products.filter(
        (prod: any) => prod.featured
      );
      console.log("FEATURED", featuredProducts);

      return { ...state, featured: featuredProducts };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GET_ALL_PRODUCTS.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GET_ALL_PRODUCTS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log("ALL_PRODUCST_PAYLOAD", action.payload);
        state.products = action.payload;
      })
      .addCase(GET_ALL_PRODUCTS.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const CREATE_PRODUCT = createAsyncThunk(
  "products/create",
  async (formData: any, thunkAPI) => {
    try {
      return await productsThunk.CREATE_PRODUCT_THUNK(formData);
    } catch (error) {
      console.log({ error });

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GET_ALL_PRODUCTS = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      return await productsThunk.GET_ALL_PRODUCTS_THUNK();
    } catch (error) {
      console.log({ error });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const { SET_PRODUCT, GET_FEATURED_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;
